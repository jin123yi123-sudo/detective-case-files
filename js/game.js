/* =========================================================
 * game.js —— 游戏主逻辑（搜证 / 线索 / 推理 / 剧情 / 存档）
 * ========================================================= */
(function () {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const SAVE_KEY = 'dcf_save_v1';

  /* ---------------- 存档 ---------------- */
  let save = load();
  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* 忽略损坏的存档 */ }
    return { found: {}, done: {}, intro: {}, qa: {} };
  }
  function persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { }
  }
  function foundOf(id) { return save.found[id] || (save.found[id] = []); }
  function qaOf(id) { return save.qa[id] || (save.qa[id] = {}); }

  /* ---------------- 屏幕 ---------------- */
  function show(id) {
    $$('.screen').forEach(s => s.classList.remove('is-active'));
    $('#' + id).classList.add('is-active');
  }

  /* ---------------- 弹层 ---------------- */
  let modalSeq = null, modalClose = null;
  function openModal(html, opts) {
    opts = opts || {};
    modalClose = opts.onClose || null;
    $('#modal-box').innerHTML = html;
    $('#modal').hidden = false;
    const box = $('#modal-box');
    box.querySelectorAll('[data-act]').forEach(b => {
      b.addEventListener('click', () => {
        const fn = opts.actions && opts.actions[b.dataset.act];
        if (fn) fn(b);
      });
    });
  }
  function closeModal() {
    $('#modal').hidden = true;
    $('#modal-box').innerHTML = '';
    const f = modalClose; modalClose = null;
    modalSeq = null;
    if (f) f();
  }
  $('#modal-mask').addEventListener('click', () => {
    if (modalSeq) { const s = modalSeq; modalSeq = null; $('#modal').hidden = true; $('#modal-box').innerHTML = ''; if (s.onEnd) s.onEnd(); return; }
    closeModal();
  });

  function toast(msg, ms) {
    const t = $('#toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(t._tm);
    t._tm = setTimeout(() => { t.hidden = true; }, ms || 1800);
  }

  /* ---------------- 剧情序列 ---------------- */
  function playSeq(items, onEnd) {
    let i = 0;
    modalSeq = { onEnd: onEnd };
    function step() {
      if (i >= items.length) { modalSeq = null; $('#modal').hidden = true; $('#modal-box').innerHTML = ''; if (onEnd) onEnd(); return; }
      const it = items[i];
      let html, who;
      if (it.type === 'narration') {
        html = `<div class="narration">${esc(it.text)}</div>
        <div class="modal__actions"><button class="btn btn--primary" data-act="next">继续</button></div>`;
      } else {
        const c = current, p = faceOf(c, it.who);
        who = p;
        html = `<div class="dialog__who">
            <div class="dialog__face">${Art.character(personFace(p, it.mood))}</div>
            <div><div class="dialog__name">${esc(p.name)}</div><div class="dialog__role">${esc(p.role || '')}</div></div>
          </div>
          <div class="dialog__text">${esc(it.text)}</div>
          <div class="modal__actions"><button class="btn btn--primary" data-act="next">继续</button></div>`;
      }
      openModal(html, {
        actions: {
          next: () => { i++; step(); }
        }
      });
    }
    step();
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m])); }
  function faceOf(c, who) {
    if (!who || who === 'det' || who === 'DET' || who === '我') return DET;
    return (c.cast && c.cast[who]) || { name: '？？', role: '', face: {} };
  }
  function personFace(p, mood) {
    const f = Object.assign({}, p.face || {});
    if (mood) f.mood = mood;
    return f;
  }

  /* ---------------- 案件列表 ---------------- */
  let current = null, curScene = 0, hintId = null;

  function unlocked(i) {
    if (i === 0) return true;
    const prev = CASES[i - 1];
    return !!(save.done[prev.id] && save.done[prev.id].cleared);
  }

  function renderCases() {
    const list = $('#case-list');
    list.innerHTML = '';
    let solved = 0;
    CASES.forEach((c, i) => {
      if (save.done[c.id] && save.done[c.id].cleared) solved++;
      const ok = unlocked(i);
      const d = save.done[c.id];
      const el = document.createElement('div');
      el.className = 'case-card' + (ok ? '' : ' is-locked');
      el.innerHTML = `
        <div class="case-card__thumb">${Art.cover(c.cover, c.theme)}</div>
        <div class="case-card__body">
          <div class="case-card__no">${c.no}</div>
          <div class="case-card__name">${esc(c.name)}</div>
          <div class="case-card__desc">${esc(ok ? c.desc : '尚未解锁 —— 先破解上一桩案件。')}</div>
          <div class="case-card__foot">
            <span class="diff">${'★'.repeat(c.difficulty)}${'☆'.repeat(3 - c.difficulty)}</span>
            ${d && d.cleared ? `<span class="tag tag--done">已破案 ${d.rank}</span>` : ok ? `<span class="tag">${esc(c.sub)}</span>` : `<span class="tag tag--lock">未解锁</span>`}
          </div>
        </div>`;
      if (ok) el.addEventListener('click', () => enterCase(c));
      list.appendChild(el);
    });
    $('#cases-progress').textContent = `已破 ${solved} / ${CASES.length}`;
  }

  /* ---------------- 进入案件 ---------------- */
  function enterCase(c) {
    current = c;
    curScene = 0; hintId = null;
    $('#case-title').textContent = c.name;
    renderSceneTabs();
    renderScene();
    renderClues();
    renderDeduce();
    switchPane('pane-scene');
    show('screen-case');
    if (!save.intro[c.id]) {
      save.intro[c.id] = 1; persist();
      playSeq(c.intro, () => { });
    }
  }

  function switchPane(id) {
    $$('.pane').forEach(p => p.classList.remove('pane--active'));
    $('#' + id).classList.add('pane--active');
    $$('.tab').forEach(t => t.classList.toggle('tab--active', t.dataset.pane === id));
    if (id === 'pane-clues') renderClues();
    if (id === 'pane-deduce') renderDeduce();
  }

  /* ---------------- 场景 ---------------- */
  function renderSceneTabs() {
    const box = $('#scene-tabs');
    box.innerHTML = '';
    current.scenes.forEach((s, i) => {
      const found = foundOf(current.id);
      const total = s.props.filter(p => p.clue).length;
      const got = s.props.filter(p => p.clue && found.indexOf(p.clue) >= 0).length;
      const b = document.createElement('button');
      b.className = 'scene-tab' + (i === curScene ? ' is-active' : '') + (got >= total && total > 0 ? ' is-clear' : '');
      b.textContent = s.name;
      b.addEventListener('click', () => { curScene = i; hintId = null; renderSceneTabs(); renderScene(); });
      box.appendChild(b);
    });
  }

  function renderScene() {
    const sc = current.scenes[curScene];
    const found = foundOf(current.id);
    const cfg = {
      theme: sc.theme, fx: sc.fx, floorY: sc.floorY,
      props: sc.props.map(p => ({ id: p.id, t: p.t, x: p.x, y: p.y, s: p.s }))
    };
    let svg = Art.scene(cfg);
    // 标记已发现 & 提示
    sc.props.forEach(p => {
      if (!p.clue) return;
      let add = '';
      if (found.indexOf(p.clue) >= 0) {
        add = `<g class="hs-mark"><circle cx="88" cy="14" r="12" fill="#16241c" stroke="#4caf7d" stroke-width="2.5"/>
          <path d="M82 14 l4.5 5 l8 -10" fill="none" stroke="#4caf7d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;
        svg = svg.replace(`data-id="${p.id}"`, `data-id="${p.id}" data-found="1"`);
      } else if (hintId === p.id) {
        add = `<circle class="hs-hintmark" cx="50" cy="10" r="9"/>`;
      }
      if (add) {
        const tag = `<g class="hotspot" data-id="${p.id}"`;
        const idx = svg.indexOf(tag);
        if (idx >= 0) {
          const close = svg.indexOf('</g>', svg.indexOf('<rect class="hs-hit"', idx));
          svg = svg.slice(0, close) + add + svg.slice(close);
        }
      }
    });
    // 未发现的 hotspot 加脉冲环
    svg = svg.replace(/<g class="hotspot" data-id="([^"]+)"( data-found="1")?/g, (m, id, f) => {
      return f ? `<g class="hotspot hs-found" data-id="${id}"` : `<g class="hotspot" data-id="${id}"`;
    });
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center';
    wrap.innerHTML = svg;
    const stage = $('#stage');
    stage.innerHTML = '';
    stage.appendChild(wrap);
    const el = wrap.querySelector('svg');
    el.addEventListener('click', e => {
      const g = e.target.closest && e.target.closest('.hotspot');
      if (!g) return;
      const pid = g.getAttribute('data-id');
      const prop = sc.props.find(p => p.id === pid);
      if (!prop || !prop.clue) return;
      revealClue(prop.clue, prop.t);
    });
    const total = sc.props.filter(p => p.clue).length;
    const got = sc.props.filter(p => p.clue && found.indexOf(p.clue) >= 0).length;
    $('#stage-hint').textContent = `本处线索 ${got} / ${total}` + (got >= total ? ' · 已搜尽' : ' · 点击可疑之处');
    updateBadges();
  }

  function revealClue(clueId, iconFallback) {
    const c = current.clues[clueId];
    if (!c) { toast('这里什么都没有。'); return; }
    const found = foundOf(current.id);
    const isNew = found.indexOf(clueId) < 0;
    if (isNew) { found.push(clueId); persist(); }
    const icon = c.icon || iconFallback;
    const html = `
      <div class="clue-modal__art">${Art.propSvg(icon, { bg: '#0c0f15', shadow: true })}</div>
      <h3 class="clue-modal__name">${esc(c.name)}</h3>
      <div class="clue-modal__text">${esc(c.text)}</div>
      ${c.quote ? `<div class="clue-modal__quote">${esc(c.quote)}</div>` : ''}
      ${c.key ? `<div class="clue-modal__quote" style="border-color:#4caf7d;color:#a8e0c4;background:rgba(76,175,125,.08)">关键线索 · 已记入线索册</div>` : ''}
      <div class="modal__actions"><button class="btn btn--primary" data-act="ok">${isNew ? '收进线索册' : '再看看'}</button></div>`;
    openModal(html, {
      actions: {
        ok: () => {
          closeModal();
          if (isNew) {
            renderScene(); renderSceneTabs(); updateBadges();
            if (keyReady() && !save.done[current.id]) toast('关键线索已集齐 —— 去推理吧', 2200);
          }
        }
      }
    });
  }

  /* ---------------- 线索册 ---------------- */
  function renderClues() {
    const box = $('#clue-list');
    const found = foundOf(current.id);
    box.innerHTML = '';
    if (!found.length) {
      box.innerHTML = `<div class="clue-empty">还没有任何发现。<br>回到现场，点击你觉得不对劲的地方。</div>`;
      return;
    }
    found.forEach(id => {
      const c = current.clues[id];
      if (!c) return;
      const el = document.createElement('div');
      el.className = 'clue-card';
      el.innerHTML = `
        <div class="clue-card__thumb">${Art.propSvg(c.icon, { bg: '#0c0f15' })}</div>
        <div class="clue-card__body">
          <div class="clue-card__name">${esc(c.name)}</div>
          <div class="clue-card__text">${esc(c.text.slice(0, 42))}…</div>
          ${c.key ? '<span class="clue-card__key">关键线索</span>' : ''}
        </div>`;
      el.addEventListener('click', () => {
        openModal(`
          <div class="clue-modal__art">${Art.propSvg(c.icon, { bg: '#0c0f15', shadow: true })}</div>
          <h3 class="clue-modal__name">${esc(c.name)}</h3>
          <div class="clue-modal__text">${esc(c.text)}</div>
          ${c.quote ? `<div class="clue-modal__quote">${esc(c.quote)}</div>` : ''}
          <div class="modal__actions"><button class="btn btn--ghost" data-act="ok">合上</button></div>`,
          { actions: { ok: closeModal } });
      });
      box.appendChild(el);
    });
  }

  /* ---------------- 推理 ---------------- */
  function keyClues() {
    return Object.keys(current.clues).filter(k => current.clues[k].key);
  }
  function keyReady() {
    const found = foundOf(current.id);
    const keys = keyClues();
    const got = keys.filter(k => found.indexOf(k) >= 0).length;
    const need = Math.min(4, keys.length);
    const perScene = current.scenes.every(s => s.props.some(p =>
      p.clue && current.clues[p.clue] && current.clues[p.clue].key && found.indexOf(p.clue) >= 0));
    return got >= need && perScene;
  }
  function keyProgress() {
    const found = foundOf(current.id);
    const keys = keyClues();
    return { got: keys.filter(k => found.indexOf(k) >= 0).length, all: keys.length, need: Math.min(4, keys.length) };
  }
  function updateBadges() {
    const found = foundOf(current.id);
    const b = $('#badge-clue');
    b.textContent = String(found.length);
    b.hidden = found.length === 0;
    const db = $('#badge-deduce');
    const done = save.done[current.id];
    if (done && done.cleared) {
      db.textContent = '已破'; db.hidden = false;
      $('#pane-deduce').classList.add('tab--ready');
      $$('.tab')[2].classList.add('tab--ready');
    } else if (keyReady()) {
      db.textContent = '可推理'; db.hidden = false;
      $$('.tab')[2].classList.add('tab--ready');
    } else {
      db.textContent = '锁'; db.hidden = false;
      $$('.tab')[2].classList.remove('tab--ready');
    }
    const totalClues = Object.keys(current.clues).length;
    $('#case-meta').textContent = `${current.no} · 线索 ${found.length}/${totalClues}`;
  }

  function renderDeduce() {
    const box = $('#deduce');
    const qa = qaOf(current.id);
    const ready = keyReady();
    box.innerHTML = '';
    if (!ready) {
      const kp = keyProgress();
      const scenesLeft = current.scenes.filter(s => !s.props.some(p =>
        p.clue && current.clues[p.clue] && current.clues[p.clue].key && foundOf(current.id).indexOf(p.clue) >= 0)).length;
      box.innerHTML = `<div class="deduce-locked"><span class="big">🔍</span>
        推理尚未解锁。<br>还差一点证据链。<br>
        <span style="color:var(--gold)">关键线索 ${kp.got} / ${kp.need}（共 ${kp.all} 条）</span><br>
        ${scenesLeft ? `<span style="color:#6b7484">还有 ${scenesLeft} 处现场一无所获</span>` : ''}
        </div>`;
      return;
    }
    current.questions.forEach((q, qi) => {
      const st = qa[qi];
      const block = document.createElement('div');
      block.className = 'q-block' + (st && st.done ? ' is-done' : '');
      block.innerHTML = `<p class="q-title">${qi + 1}. ${esc(q.q)}</p>${q.sub ? `<p class="q-sub">${esc(q.sub)}</p>` : ''}`;
      q.options.forEach((o, oi) => {
        const b = document.createElement('button');
        b.className = 'opt';
        b.textContent = o.t;
        if (st) {
          if (st.pick === oi) b.classList.add(o.ok ? 'is-right' : 'is-wrong');
          if (!o.ok && st.pick === oi) { /* 错选保持红 */ }
          if (o.ok && st.done) b.classList.add('is-right');
          b.disabled = true;
        }
        b.addEventListener('click', () => answer(block, q, qi, oi));
        block.appendChild(b);
      });
      if (st && st.done) {
        const r = document.createElement('div');
        r.className = 'q-result';
        r.innerHTML = `<b>解析：</b>${esc(q.result || '')}`;
        block.appendChild(r);
      }
      box.appendChild(block);
    });
    if (current.questions.every((q, qi) => qa[qi] && qa[qi].done)) {
      const fin = document.createElement('button');
      fin.className = 'btn btn--primary btn--wide';
      fin.style.margin = '6px auto 0';
      fin.textContent = '揭开真相';
      fin.addEventListener('click', () => {
        if (save.done[current.id] && save.done[current.id].cleared) { showTruth(true); return; }
        finish();
      });
      const w = document.createElement('div');
      w.style.textAlign = 'center';
      w.appendChild(fin);
      box.appendChild(w);
    }
  }

  function answer(block, q, qi, oi) {
    const qa = qaOf(current.id);
    const o = q.options[oi];
    if (!qa[qi]) qa[qi] = { tries: 0 };
    if (qa[qi].done) return;
    qa[qi].tries++;
    if (!o.ok) {
      qa[qi].wrong = (qa[qi].wrong || 0) + 1;
      persist();
      toast('这条推不通，再想想。');
      return;
    }
    qa[qi].done = true; qa[qi].pick = oi;
    persist();
    renderDeduce();
  }

  /* ---------------- 结案 ---------------- */
  function finish() {
    const qa = qaOf(current.id);
    let wrong = 0;
    current.questions.forEach((q, i) => { if (qa[i]) wrong += qa[i].wrong || 0; });
    const hints = save.done[current.id] && save.done[current.id].hints || hintCount(current.id);
    let score = 100 - wrong * 6 - hints * 8;
    score = Math.max(40, Math.min(100, score));
    const rank = RANKS.find(r => score >= r.min);
    const foundCount = foundOf(current.id).length;
    save.done[current.id] = {
      cleared: true, score: score, rank: rank.rk,
      hints: hints, clues: foundCount, total: Object.keys(current.clues).length
    };
    persist();
    showTruth(false);
  }

  function hintCount(id) { return (save.done[id] && save.done[id].hints) || 0; }
  function addHint() {
    const d = save.done[current.id] || (save.done[current.id] = { hints: 0 });
    d.hints = (d.hints || 0) + 1;
    persist();
  }

  function showTruth(replay) {
    const t = current.truth;
    const seq = [
      { type: 'narration', text: t.title },
      { type: 'narration', text: t.text }
    ].concat(t.ending || []);
    playSeq(seq, () => {
      const d = save.done[current.id];
      const rank = RANKS.find(r => d.score >= r.min);
      const qa = qaOf(current.id);
      let wrong = 0; current.questions.forEach((q, i) => { if (qa[i]) wrong += qa[i].wrong || 0; });
      openModal(`
        <div class="result-rank"><div class="rk">${rank.rk}</div><div class="rl">${esc(rank.label)}</div></div>
        <div class="result-stats">
          <div><b>${d.score}</b><span>得分</span></div>
          <div><b>${d.clues}/${d.total}</b><span>线索</span></div>
          <div><b>${current.questions.length - wrong}/${current.questions.length}</b><span>推理</span></div>
          <div><b>${d.hints || 0}</b><span>提示</span></div>
        </div>
        <div class="truth">${esc(t.title)}\n卷宗封存。</div>
        <div class="modal__actions">
          <button class="btn btn--ghost" data-act="stay">留在现场</button>
          <button class="btn btn--primary" data-act="back">回到卷宗</button>
        </div>`, {
        actions: {
          back: () => { closeModal(); backToCases(); },
          stay: () => { closeModal(); renderDeduce(); renderSceneTabs(); renderScene(); }
        }
      });
      renderCases();
    });
  }

  function backToCases() {
    show('screen-cases');
    renderCases();
  }

  /* ---------------- 提示 ---------------- */
  function useHint() {
    const found = foundOf(current.id);
    const targets = [];
    current.scenes.forEach((s, i) => {
      s.props.forEach(p => {
        if (p.clue && current.clues[p.clue] && current.clues[p.clue].key && found.indexOf(p.clue) < 0) targets.push({ i, p });
      });
    });
    if (!targets.length) { toast('关键线索都找到了。'); return; }
    const t = targets[0];
    curScene = t.i; hintId = t.p.id;
    addHint();
    renderSceneTabs(); renderScene();
    toast('已标记一处尚未搜查的地方');
  }

  /* ---------------- 事件绑定 ---------------- */
  $('#btn-start').addEventListener('click', () => { show('screen-cases'); renderCases(); });
  $('#btn-continue').addEventListener('click', () => {
    const last = CASES.filter(c => save.done[c.id] && save.done[c.id].cleared).pop();
    if (!last) { toast('还没有进度，先开始第一桩案子吧'); show('screen-cases'); renderCases(); return; }
    enterCase(last);
  });
  $('#btn-back').addEventListener('click', backToCases);
  $('#btn-hint').addEventListener('click', useHint);
  $('#btn-reset').addEventListener('click', () => {
    openModal(`<h3 class="clue-modal__name">清空存档</h3>
      <div class="clue-modal__text">所有已收集的线索、推理记录与通关评级都会被删除，且无法恢复。</div>
      <div class="modal__actions">
        <button class="btn btn--ghost" data-act="no">取消</button>
        <button class="btn btn--primary" data-act="yes">确认清空</button>
      </div>`, {
      actions: {
        no: closeModal,
        yes: () => { save = { found: {}, done: {}, intro: {}, qa: {} }; persist(); closeModal(); renderCases(); toast('存档已清空'); }
      }
    });
  });
  $$('.tab').forEach(t => t.addEventListener('click', () => switchPane(t.dataset.pane)));

  /* ---------------- 启动 ---------------- */
  $('#intro-art').innerHTML = Art.intro();
  renderCases();
})();
