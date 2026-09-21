/* =========================================================
 * art.js —— 纯 SVG 手绘素材库（场景 / 道具 / 人物 / 封面）
 * 所有图形在 100x100 局部坐标内绘制，场景画布 600x750（竖屏）
 * ========================================================= */
const Art = (function () {

  /* ---------------- 道具库 ---------------- */
  const P = {};

  P.desk = () => `
<rect x="6" y="28" width="88" height="11" rx="2" fill="#7a5533"/>
<rect x="6" y="39" width="88" height="5" fill="#4e341d"/>
<rect x="12" y="44" width="9" height="50" fill="#5a3c23"/>
<rect x="79" y="44" width="9" height="50" fill="#5a3c23"/>
<rect x="24" y="46" width="52" height="24" rx="2" fill="#6b4a2c"/>
<rect x="28" y="52" width="44" height="3" fill="#452c17" opacity=".6"/>
<circle cx="50" cy="59" r="3" fill="#d8b46a"/>`;

  P.table = () => `
<ellipse cx="50" cy="34" rx="42" ry="13" fill="#8a6440"/>
<path d="M8 34v6a42 13 0 0 0 84 0v-6" fill="#5d4227"/>
<rect x="46" y="42" width="8" height="42" fill="#6b4a2c"/>
<ellipse cx="50" cy="86" rx="20" ry="6" fill="#4a331f"/>`;

  P.chair = () => `
<rect x="30" y="18" width="40" height="46" rx="6" fill="#4a3a52"/>
<rect x="34" y="22" width="32" height="38" rx="4" fill="#5b4864"/>
<rect x="26" y="64" width="48" height="9" rx="3" fill="#7a5533"/>
<rect x="30" y="73" width="7" height="24" fill="#5a3c23"/>
<rect x="63" y="73" width="7" height="24" fill="#5a3c23"/>`;

  P.sofa = () => `
<rect x="8" y="34" width="84" height="34" rx="8" fill="#5a3b46"/>
<rect x="8" y="52" width="84" height="18" rx="6" fill="#6d4a57"/>
<rect x="14" y="20" width="72" height="24" rx="8" fill="#6d4a57"/>
<rect x="18" y="68" width="10" height="12" fill="#3d2730"/>
<rect x="72" y="68" width="10" height="12" fill="#3d2730"/>`;

  P.rug = () => `
<ellipse cx="50" cy="50" rx="46" ry="26" fill="#6b2f36"/>
<ellipse cx="50" cy="50" rx="36" ry="19" fill="none" stroke="#a4525c" stroke-width="2"/>
<ellipse cx="50" cy="50" rx="24" ry="12" fill="#7d3a42"/>`;

  P.bookshelf = () => `
<rect x="10" y="6" width="80" height="88" rx="3" fill="#4e341d"/>
<rect x="14" y="10" width="72" height="80" fill="#2c1d10"/>
<rect x="14" y="30" width="72" height="4" fill="#4e341d"/>
<rect x="14" y="56" width="72" height="4" fill="#4e341d"/>
<rect x="18" y="14" width="7" height="16" fill="#8a4a3c"/>
<rect x="26" y="12" width="6" height="18" fill="#3f6a55"/>
<rect x="33" y="15" width="8" height="15" fill="#6a5a8a"/>
<rect x="18" y="34" width="6" height="20" fill="#a8894a"/>
<rect x="26" y="36" width="8" height="18" fill="#7a4a3c"/>
<rect x="36" y="33" width="5" height="21" fill="#3f6a55"/>
<rect x="18" y="60" width="8" height="24" fill="#6a5a8a"/>
<rect x="30" y="62" width="7" height="22" fill="#8a4a3c"/>`;

  P.book = () => `
<path d="M18 72 L18 34 L52 28 L52 68 Z" fill="#8a4a3c"/>
<path d="M52 68 L52 28 L84 34 L84 72 Z" fill="#9c5a4a"/>
<path d="M18 34 L52 28 L52 68 L18 72 Z" fill="none" stroke="#5e2f26" stroke-width="2"/>
<rect x="22" y="42" width="24" height="2" fill="#e8d6a8" opacity=".7"/>
<rect x="22" y="48" width="18" height="2" fill="#e8d6a8" opacity=".5"/>`;

  P.painting = () => `
<rect x="12" y="10" width="76" height="58" rx="2" fill="#b8912f"/>
<rect x="18" y="16" width="64" height="46" fill="#22303c"/>
<path d="M18 46 L36 30 L50 42 L62 26 L82 44 L82 62 L18 62 Z" fill="#2f4a44"/>
<circle cx="66" cy="26" r="5" fill="#d9c07a"/>
<rect x="12" y="68" width="76" height="4" fill="#8a6d22"/>`;

  P.frame = () => `
<rect x="14" y="12" width="72" height="54" rx="2" fill="#b8912f"/>
<rect x="20" y="18" width="60" height="42" fill="#e6e2d6"/>
<rect x="20" y="66" width="60" height="20" fill="#8a6d22" opacity=".2"/>`;

  P.window = () => `
<rect x="10" y="8" width="80" height="76" rx="2" fill="#5b4a33"/>
<rect x="15" y="13" width="70" height="66" fill="#121e2c"/>
<path d="M15 46h70M50 13v66" stroke="#5b4a33" stroke-width="4"/>
<circle cx="34" cy="30" r="4" fill="#6d7f96" opacity=".7"/>
<path d="M20 70 q14 -18 28 -6 q10 8 22 -10" stroke="#3d5670" stroke-width="3" fill="none" opacity=".8"/>`;

  P.curtain = () => `
<path d="M14 6 q10 40 4 88 h16 q6 -48 -2 -88 Z" fill="#7a2f3a"/>
<path d="M86 6 q-10 40 -4 88 H66 q-6 -48 2 -88 Z" fill="#7a2f3a"/>
<path d="M20 8 q6 40 2 84" stroke="#963c48" stroke-width="3" fill="none"/>
<path d="M80 8 q-6 40 -2 84" stroke="#963c48" stroke-width="3" fill="none"/>`;

  P.door = () => `
<rect x="20" y="4" width="60" height="94" rx="2" fill="#4e341d"/>
<rect x="26" y="10" width="48" height="84" fill="#6b4a2c"/>
<rect x="26" y="10" width="48" height="40" fill="#7a5533"/>
<circle cx="68" cy="56" r="4" fill="#d8b46a"/>`;

  P.clock = () => `
<circle cx="50" cy="50" r="34" fill="#3a2f28"/>
<circle cx="50" cy="50" r="28" fill="#e8e2d0"/>
<path d="M50 50 L50 30 M50 50 L66 58" stroke="#2c241d" stroke-width="3" stroke-linecap="round"/>
<circle cx="50" cy="50" r="3" fill="#2c241d"/>
<path d="M50 22 v6 M78 50 h-6 M50 78 v-6 M22 50 h6" stroke="#2c241d" stroke-width="2"/>`;

  P.mirror = () => `
<rect x="22" y="8" width="56" height="76" rx="28" fill="#8a6d22"/>
<rect x="28" y="14" width="44" height="64" rx="22" fill="#5d6a78"/>
<path d="M34 24 q14 -8 30 6" stroke="#a8b8c8" stroke-width="3" fill="none" opacity=".6"/>`;

  P.safe = () => `
<rect x="12" y="14" width="76" height="72" rx="4" fill="#3c4450"/>
<rect x="18" y="20" width="64" height="60" rx="2" fill="#4c5663"/>
<circle cx="66" cy="50" r="13" fill="#2b313b"/>
<circle cx="66" cy="50" r="7" fill="#8b949f"/>
<path d="M66 43 v14 M60 50 h12" stroke="#2b313b" stroke-width="2"/>
<rect x="24" y="28" width="22" height="3" fill="#2b313b" opacity=".6"/>`;

  P.shelf = () => `
<rect x="8" y="30" width="84" height="6" rx="2" fill="#6b4a2c"/>
<rect x="10" y="36" width="5" height="8" fill="#4e341d"/>
<rect x="85" y="36" width="5" height="8" fill="#4e341d"/>
<rect x="16" y="14" width="12" height="16" rx="2" fill="#8a4a3c"/>
<rect x="32" y="18" width="10" height="12" rx="1" fill="#3f6a55"/>
<circle cx="58" cy="24" r="7" fill="#6a5a8a"/>`;

  P.vent = () => `
<rect x="16" y="26" width="68" height="48" rx="3" fill="#4a525e"/>
<rect x="20" y="30" width="60" height="40" fill="#2b313b"/>
<path d="M22 38 h56 M22 46 h56 M22 54 h56 M22 62 h56" stroke="#6e7885" stroke-width="3"/>`;

  P.wallstain = () => `
<path d="M30 20 q18 -6 26 8 q10 16 -4 30 q-14 14 -28 2 q-12 -12 -6 -26 Z" fill="#6d1f24" opacity=".85"/>
<circle cx="76" cy="62" r="5" fill="#6d1f24" opacity=".8"/>
<circle cx="24" cy="70" r="3" fill="#6d1f24" opacity=".7"/>`;

  P.lamp = () => `
<path d="M30 44 L70 44 L62 22 L38 22 Z" fill="#b8912f"/>
<rect x="47" y="44" width="6" height="40" fill="#5a4a33"/>
<ellipse cx="50" cy="88" rx="18" ry="6" fill="#4a3a22"/>
<circle cx="50" cy="52" r="6" fill="#ffd97a" opacity=".9"/>`;

  P.vase = () => `
<path d="M38 30 q-14 18 -6 40 q4 12 18 12 q14 0 18 -12 q8 -22 -6 -40 Z" fill="#4a6a7a"/>
<rect x="36" y="24" width="28" height="8" rx="3" fill="#5d8093"/>
<path d="M50 24 q-16 -10 -10 -18 M50 24 q2 -16 14 -18" stroke="#3f6a55" stroke-width="3" fill="none"/>
<circle cx="42" cy="14" r="5" fill="#c85a6a"/>
<circle cx="58" cy="18" r="4" fill="#d9a05a"/>`;

  P.plant = () => `
<path d="M34 92 h32 l-4 -26 h-24 Z" fill="#8a5a3c"/>
<path d="M50 66 q-22 -6 -26 -30 q14 2 24 20 Z" fill="#3f6a55"/>
<path d="M50 66 q22 -8 24 -32 q-14 4 -24 22 Z" fill="#4a7a62"/>
<path d="M50 66 v-38" stroke="#35604c" stroke-width="3"/>`;

  P.cup = () => `
<path d="M28 42 h38 l-4 32 q-1 10 -15 10 q-14 0 -15 -10 Z" fill="#e6e2d6"/>
<path d="M66 48 q12 2 10 12 q-2 10 -12 8" stroke="#e6e2d6" stroke-width="5" fill="none"/>
<ellipse cx="47" cy="42" rx="19" ry="6" fill="#f2efe6"/>
<ellipse cx="47" cy="42" rx="13" ry="4" fill="#6b3f22"/>
<path d="M40 26 q4 -8 0 -14 M52 26 q4 -8 0 -14" stroke="#b8b3a6" stroke-width="2" fill="none" opacity=".5"/>`;

  P.glass = () => `
<path d="M32 28 h36 l-5 54 q-1 10 -13 10 q-12 0 -13 -10 Z" fill="#a8c4d8" opacity=".45"/>
<path d="M36 52 h28 l-3 30 q-1 6 -11 6 q-10 0 -11 -6 Z" fill="#7a3a4a" opacity=".8"/>
<ellipse cx="50" cy="28" rx="18" ry="5" fill="#c8dcea" opacity=".7"/>`;

  P.bottle = () => `
<rect x="42" y="14" width="16" height="22" rx="2" fill="#3f5a3f"/>
<path d="M42 36 q-16 10 -16 30 v22 q0 6 16 6 q16 0 16 -6 V66 q0 -20 -16 -30 Z" fill="#2f4a30"/>
<rect x="32" y="58" width="36" height="16" fill="#e0d5b0"/>
<path d="M36 62 h28 M36 68 h20" stroke="#8a7a4a" stroke-width="2"/>`;

  P.coffee = () => `
<path d="M26 40 h40 l-5 34 q-1 10 -15 10 q-14 0 -15 -10 Z" fill="#d8d4c8"/>
<path d="M66 46 q12 3 10 13 q-2 9 -12 7" stroke="#d8d4c8" stroke-width="5" fill="none"/>
<ellipse cx="46" cy="40" rx="20" ry="6" fill="#3b2318"/>
<ellipse cx="46" cy="40" rx="13" ry="4" fill="#6b4a2c" opacity=".6"/>
<rect x="24" y="88" width="44" height="5" rx="2" fill="#c8c4b8"/>`;

  P.plate = () => `
<ellipse cx="50" cy="56" rx="38" ry="18" fill="#e6e2d6"/>
<ellipse cx="50" cy="54" rx="28" ry="12" fill="#f4f2ec"/>
<path d="M36 52 q14 -8 28 0" stroke="#8a6a4a" stroke-width="3" fill="none"/>
<circle cx="40" cy="58" r="4" fill="#c85a4a"/>
<circle cx="58" cy="60" r="3" fill="#6a8a4a"/>`;

  P.pillbox = () => `
<rect x="20" y="38" width="60" height="34" rx="6" fill="#dcd8cc"/>
<rect x="20" y="44" width="60" height="8" fill="#c85a5a"/>
<path d="M36 38 v34 M50 38 v34 M64 38 v34" stroke="#b8b3a6" stroke-width="2"/>
<circle cx="30" cy="82" r="5" fill="#e8e4d8"/>
<circle cx="46" cy="84" r="5" fill="#dcd0a8"/>`;

  P.syringe = () => `
<rect x="16" y="46" width="52" height="14" rx="3" fill="#d8e4ec" opacity=".8"/>
<rect x="24" y="48" width="36" height="10" fill="#7a9a5a" opacity=".8"/>
<rect x="68" y="50" width="18" height="6" fill="#b8c4cc"/>
<path d="M86 53 h10" stroke="#8b949f" stroke-width="2"/>
<rect x="10" y="42" width="8" height="22" rx="2" fill="#b8c4cc"/>
<path d="M20 50 v10 M30 50 v10 M40 50 v10 M50 50 v10 M60 50 v10" stroke="#5a6a7a" stroke-width="1.5"/>`;

  P.knife = () => `
<path d="M14 58 L58 40 L66 48 L22 66 Z" fill="#c8cdd4"/>
<path d="M58 40 L66 48 L58 52 Z" fill="#e6eaef"/>
<rect x="60" y="50" width="30" height="10" rx="4" transform="rotate(-20 60 50)" fill="#5a3c23"/>
<path d="M18 60 L60 44" stroke="#8b949f" stroke-width="1.5"/>`;

  P.rope = () => `
<path d="M16 76 q14 -30 34 -20 q22 10 34 -22" stroke="#a8894a" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M16 76 q14 -30 34 -20 q22 10 34 -22" stroke="#7d6231" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
<circle cx="16" cy="76" r="5" fill="none" stroke="#a8894a" stroke-width="4"/>`;

  P.letter = () => `
<path d="M20 30 h60 v44 q0 4 -4 4 H24 q-4 0 -4 -4 Z" fill="#efe9d8"/>
<path d="M20 30 L50 50 L80 30" fill="none" stroke="#c8bfa4" stroke-width="2"/>
<path d="M28 56 h30 M28 64 h22 M28 72 h34" stroke="#9aa0ac" stroke-width="2"/>
<circle cx="72" cy="70" r="7" fill="#a83a3a" opacity=".8"/>`;

  P.diary = () => `
<rect x="24" y="20" width="54" height="66" rx="4" fill="#4a3a52"/>
<rect x="30" y="26" width="42" height="54" fill="#efe9d8"/>
<rect x="20" y="30" width="8" height="46" rx="2" fill="#6b2f36"/>
<path d="M36 40 h30 M36 50 h30 M36 60 h20" stroke="#9aa0ac" stroke-width="2"/>`;

  P.phone = () => `
<rect x="34" y="18" width="34" height="66" rx="7" fill="#22282f"/>
<rect x="38" y="24" width="26" height="52" rx="3" fill="#3d5a7a"/>
<rect x="44" y="28" width="14" height="3" rx="1.5" fill="#8b949f"/>
<path d="M40 78 h22" stroke="#8b949f" stroke-width="2"/>`;

  P.computer = () => `
<rect x="14" y="20" width="72" height="46" rx="4" fill="#2b313b"/>
<rect x="19" y="25" width="62" height="36" fill="#1c3a4a"/>
<path d="M24 52 L40 38 L52 46 L64 32 L76 46" stroke="#5ac8a8" stroke-width="2" fill="none"/>
<path d="M32 70 h36 l6 14 H26 Z" fill="#4a525e"/>
<rect x="40" y="72" width="20" height="3" rx="1.5" fill="#2b313b"/>`;

  P.camera = () => `
<rect x="14" y="32" width="60" height="40" rx="5" fill="#333a44"/>
<rect x="20" y="38" width="26" height="20" rx="2" fill="#1c2229"/>
<circle cx="33" cy="48" r="6" fill="#4a6a8a"/>
<circle cx="33" cy="48" r="2.5" fill="#a8c4d8"/>
<path d="M74 40 l10 -8 v34 l-10 -8 Z" fill="#4a525e"/>
<circle cx="62" cy="42" r="3" fill="#c85a4a"/>
<rect x="30" y="72" width="30" height="6" rx="2" fill="#22282f"/>`;

  P.monitor = () => `
<rect x="18" y="24" width="64" height="42" rx="4" fill="#3c4450"/>
<rect x="23" y="29" width="54" height="32" fill="#141a22"/>
<path d="M27 54 L40 42 L50 50 L62 36 L73 50" stroke="#6ad0a0" stroke-width="1.6" fill="none" opacity=".8"/>
<circle cx="66" cy="36" r="2" fill="#e05252"/>
<rect x="44" y="66" width="12" height="14" fill="#4a525e"/>
<rect x="34" y="80" width="32" height="5" rx="2" fill="#4a525e"/>`;

  P.key = () => `
<circle cx="30" cy="50" r="15" fill="none" stroke="#d8b46a" stroke-width="6"/>
<path d="M45 50 h44" stroke="#d8b46a" stroke-width="6" stroke-linecap="round"/>
<path d="M74 50 v14 M84 50 v10" stroke="#d8b46a" stroke-width="5" stroke-linecap="round"/>`;

  P.watch = () => `
<rect x="38" y="10" width="24" height="22" rx="3" fill="#5a4a33"/>
<rect x="42" y="66" width="16" height="24" rx="3" fill="#5a4a33"/>
<circle cx="50" cy="50" r="22" fill="#8b949f"/>
<circle cx="50" cy="50" r="17" fill="#e8e4d8"/>
<path d="M50 50 L50 38 M50 50 L60 54" stroke="#2c241d" stroke-width="2.5" stroke-linecap="round"/>`;

  P.ring = () => `
<ellipse cx="50" cy="60" rx="24" ry="20" fill="none" stroke="#d8b46a" stroke-width="6"/>
<path d="M50 26 l8 14 h-16 Z" fill="#7ad0e0"/>
<path d="M42 40 l16 0 l-8 12 Z" fill="#a8e4ee"/>`;

  P.ticket = () => `
<path d="M16 34 h68 v12 a6 6 0 0 0 0 12 v12 h-68 v-12 a6 6 0 0 0 0 -12 Z" fill="#e0d5b0"/>
<path d="M16 46 h68 M16 58 h68" stroke="#b8ab84" stroke-width="1.5" stroke-dasharray="4 4"/>
<rect x="24" y="38" width="26" height="3" fill="#8a7a4a"/>
<rect x="24" y="64" width="18" height="3" fill="#8a7a4a"/>`;

  P.bag = () => `
<rect x="18" y="34" width="64" height="50" rx="6" fill="#4a3a2c"/>
<rect x="18" y="46" width="64" height="6" fill="#6b4a2c"/>
<path d="M34 34 q0 -18 16 -18 q16 0 16 18" stroke="#6b4a2c" stroke-width="5" fill="none"/>
<rect x="44" y="44" width="12" height="10" rx="2" fill="#d8b46a"/>`;

  P.suitcase = () => `
<rect x="14" y="30" width="72" height="52" rx="5" fill="#5a3c3c"/>
<rect x="14" y="40" width="72" height="5" fill="#7a4a4a"/>
<path d="M38 30 v-12 h24 v12" stroke="#3a2a2a" stroke-width="5" fill="none"/>
<rect x="20" y="50" width="18" height="22" rx="2" fill="#7a4a4a" opacity=".7"/>
<circle cx="60" cy="60" r="5" fill="#d8b46a"/>`;

  P.glove = () => `
<path d="M32 90 V52 q0 -8 8 -8 h12 q8 0 8 8 v38 Z" fill="#3a4250"/>
<path d="M32 52 q-2 -12 4 -16 q6 -4 8 2" fill="#4a525e"/>
<path d="M44 44 v-12 q0 -4 4 -4 q4 0 4 4 v12" fill="#3a4250"/>
<path d="M52 44 v-14 q0 -4 4 -4 q4 0 4 4 v14" fill="#4a525e"/>
<path d="M60 46 v-10 q0 -4 4 -4 q4 0 4 4 v14" fill="#3a4250"/>
<path d="M34 78 h32" stroke="#2b313b" stroke-width="2"/>`;

  P.cigarette = () => `
<rect x="18" y="52" width="44" height="8" rx="4" fill="#efe9d8"/>
<rect x="58" y="52" width="20" height="8" rx="4" fill="#c89a4a"/>
<circle cx="20" cy="56" r="5" fill="#e05252"/>
<path d="M26 50 q6 -10 0 -18" stroke="#b8b3a6" stroke-width="2" fill="none" opacity=".5"/>
<path d="M40 50 q6 -12 2 -22" stroke="#b8b3a6" stroke-width="2" fill="none" opacity=".4"/>`;

  P.footprint = () => `
<ellipse cx="50" cy="42" rx="16" ry="24" fill="#5a3a2a" opacity=".8"/>
<ellipse cx="50" cy="76" rx="10" ry="12" fill="#5a3a2a" opacity=".8"/>
<ellipse cx="50" cy="40" rx="10" ry="17" fill="#7a5238" opacity=".7"/>`;

  P.bloodstain = () => `
<path d="M28 40 q16 -14 34 -4 q18 10 8 30 q-10 20 -32 12 q-20 -8 -14 -26 Z" fill="#7d1f24"/>
<ellipse cx="74" cy="72" rx="9" ry="6" fill="#7d1f24" opacity=".85"/>
<ellipse cx="20" cy="76" rx="6" ry="4" fill="#7d1f24" opacity=".7"/>`;

  P.powder = () => `
<path d="M30 56 q10 -18 30 -12 q18 6 12 24 q-6 16 -26 12 q-18 -4 -16 -24 Z" fill="#dcd8cc" opacity=".55"/>
<circle cx="70" cy="46" r="4" fill="#dcd8cc" opacity=".6"/>
<circle cx="26" cy="70" r="3" fill="#dcd8cc" opacity=".5"/>`;

  P.crate = () => `
<rect x="12" y="34" width="76" height="54" rx="2" fill="#8a6a3c"/>
<rect x="12" y="34" width="76" height="8" fill="#a8894a"/>
<path d="M12 42 L88 88 M88 42 L12 88" stroke="#6b4f2c" stroke-width="3"/>
<rect x="12" y="34" width="76" height="54" rx="2" fill="none" stroke="#5a4022" stroke-width="3"/>`;

  P.barrel = () => `
<path d="M24 26 q26 -8 52 0 l-4 60 q-22 8 -44 0 Z" fill="#6b4a2c"/>
<ellipse cx="50" cy="26" rx="26" ry="7" fill="#8a6a3c"/>
<path d="M22 46 h56 M22 66 h56" stroke="#4a331f" stroke-width="5"/>
<path d="M22 46 h56 M22 66 h56" stroke="#b8912f" stroke-width="1.5" opacity=".6"/>`;

  P.box = () => `
<rect x="18" y="38" width="64" height="48" rx="2" fill="#a8894a"/>
<path d="M18 38 L50 24 L82 38 L50 52 Z" fill="#c8a968"/>
<path d="M50 52 v34" stroke="#8a6a3c" stroke-width="2"/>
<rect x="42" y="58" width="16" height="10" fill="#d8d4c8" opacity=".8"/>`;

  P.trash = () => `
<path d="M28 32 h44 l-5 56 q-1 6 -17 6 q-16 0 -17 -6 Z" fill="#4a525e"/>
<rect x="24" y="24" width="52" height="9" rx="3" fill="#5e6874"/>
<rect x="42" y="18" width="16" height="6" rx="3" fill="#5e6874"/>
<path d="M36 46 v34 M50 46 v34 M64 46 v34" stroke="#39414d" stroke-width="2"/>
<path d="M56 20 q10 -10 16 -2" stroke="#8a7a4a" stroke-width="2" fill="none"/>`;

  P.body = () => `
<path d="M22 78 q-6 -20 10 -30 q10 -6 8 -16 q-2 -10 8 -14 q12 -4 20 4 q8 8 4 18 q-4 10 8 16 q18 10 12 32 q-2 8 -10 8 h-30 q-12 0 -20 -18 Z"
  fill="none" stroke="#e8e6e0" stroke-width="3" stroke-dasharray="9 6" opacity=".85"/>
<circle cx="76" cy="34" r="12" fill="none" stroke="#e8e6e0" stroke-width="3" stroke-dasharray="7 5" opacity=".85"/>
<path d="M18 84 h72" stroke="#e8e6e0" stroke-width="2" opacity=".3"/>`;

  P.candle = () => `
<rect x="40" y="44" width="20" height="44" rx="3" fill="#efe9d8"/>
<path d="M46 44 q4 -10 8 0" fill="#d8d0b8"/>
<path d="M50 30 q-6 -8 0 -16 q6 8 0 16 Z" fill="#ffd97a"/>
<ellipse cx="50" cy="88" rx="20" ry="6" fill="#c8b896"/>
<path d="M34 88 h32" stroke="#8a7a4a" stroke-width="2"/>`;

  P.statue = () => `
<path d="M36 90 h28 l4 -22 h-36 Z" fill="#4a525e"/>
<path d="M30 68 q4 -26 20 -26 q16 0 20 26 Z" fill="#c8cdd4"/>
<circle cx="50" cy="30" r="14" fill="#d8dde4"/>
<path d="M38 26 q12 -12 24 0" stroke="#b8bcc4" stroke-width="3" fill="none"/>
<path d="M40 52 l-14 10 M60 52 l14 10" stroke="#c8cdd4" stroke-width="6" stroke-linecap="round"/>`;

  P.fountain = () => `
<ellipse cx="50" cy="72" rx="42" ry="18" fill="#3c4a58"/>
<ellipse cx="50" cy="70" rx="34" ry="13" fill="#2f5a6a"/>
<rect x="44" y="34" width="12" height="38" fill="#c8cdd4"/>
<ellipse cx="50" cy="32" rx="20" ry="7" fill="#d8dde4"/>
<path d="M50 26 q-14 -12 -18 4 M50 26 q14 -12 18 4" stroke="#a8d8e8" stroke-width="3" fill="none"/>
<circle cx="34" cy="46" r="3" fill="#a8d8e8"/><circle cx="66" cy="44" r="3" fill="#a8d8e8"/>`;

  P.mic = () => `
<rect x="44" y="20" width="12" height="26" rx="6" fill="#4a525e"/>
<path d="M38 30 q0 -14 12 -14 q12 0 12 14 v10 q0 12 -12 12 q-12 0 -12 -12 Z" fill="#5e6874"/>
<path d="M38 38 q12 8 24 0" stroke="#3c4450" stroke-width="2" fill="none"/>
<rect x="48" y="58" width="4" height="22" fill="#4a525e"/>
<ellipse cx="50" cy="84" rx="16" ry="5" fill="#3c4450"/>`;

  P.piano = () => `
<rect x="8" y="30" width="84" height="46" rx="3" fill="#1e1a18"/>
<rect x="8" y="30" width="84" height="10" fill="#2b2522"/>
<rect x="14" y="50" width="72" height="20" fill="#efe9d8"/>
<path d="M26 50 v20 M38 50 v20 M50 50 v20 M62 50 v20 M74 50 v20" stroke="#1e1a18" stroke-width="2"/>
<path d="M12 76 h20 v6 H12 Z M34 76 h14 v6 H34 Z M54 76 h14 v6 H54 Z M74 76 h10 v6 h-10 Z" fill="#2b2522"/>`;

  P.spotlight = () => `
<path d="M30 20 h40 l10 26 H20 Z" fill="#3c4450"/>
<rect x="46" y="46" width="8" height="16" fill="#4a525e"/>
<path d="M50 62 L20 96 h60 Z" fill="#ffe9a8" opacity=".22"/>
<circle cx="50" cy="60" r="6" fill="#ffd97a"/>`;

  P.seat = () => `
<rect x="18" y="44" width="64" height="12" rx="4" fill="#7a2f3a"/>
<rect x="14" y="30" width="72" height="34" rx="8" fill="#8a3a46"/>
<rect x="14" y="56" width="72" height="24" rx="6" fill="#6d2f39"/>
<rect x="20" y="80" width="8" height="14" fill="#3d2730"/>
<rect x="72" y="80" width="8" height="14" fill="#3d2730"/>`;

  P.boat = () => `
<path d="M10 58 q40 22 80 0 l-12 24 q-28 10 -56 0 Z" fill="#6b4a2c"/>
<path d="M10 58 q40 22 80 0" fill="none" stroke="#8a6a3c" stroke-width="4"/>
<rect x="48" y="20" width="4" height="38" fill="#5a3c23"/>
<path d="M52 24 L78 52 H52 Z" fill="#d8d4c8"/>
<path d="M20 82 q30 10 60 0" stroke="#2f5a6a" stroke-width="4" fill="none"/>`;

  P.container = () => `
<rect x="6" y="24" width="88" height="56" rx="2" fill="#7a4a3a"/>
<rect x="6" y="24" width="88" height="8" fill="#9c6a52"/>
<path d="M20 32 v48 M36 32 v48 M52 32 v48 M68 32 v48 M84 32 v48" stroke="#5a3226" stroke-width="3"/>
<rect x="38" y="44" width="24" height="18" fill="#2b313b"/>`;

  P.net = () => `
<path d="M16 34 q34 12 68 0 l-8 52 q-26 12 -52 0 Z" fill="#8a7a4a" opacity=".35"/>
<path d="M20 40 L76 86 M76 40 L26 88 M50 36 v52 M16 60 h68" stroke="#a8894a" stroke-width="1.6" opacity=".7"/>
<circle cx="42" cy="66" r="6" fill="#5a6a7a"/>`;

  P.anchor = () => `
<circle cx="50" cy="22" r="8" fill="none" stroke="#6e7885" stroke-width="5"/>
<rect x="46" y="30" width="8" height="52" fill="#6e7885"/>
<rect x="28" y="44" width="44" height="7" rx="3" fill="#6e7885"/>
<path d="M30 60 q-14 12 -6 26 q6 8 14 0" stroke="#6e7885" stroke-width="6" fill="none"/>
<path d="M70 60 q14 12 6 26 q-6 8 -14 0" stroke="#6e7885" stroke-width="6" fill="none"/>`;

  P.locker = () => `
<rect x="22" y="10" width="56" height="84" rx="3" fill="#4a525e"/>
<rect x="26" y="14" width="48" height="76" fill="#5e6874"/>
<path d="M50 14 v76" stroke="#3c4450" stroke-width="2"/>
<circle cx="45" cy="52" r="3" fill="#2b313b"/>
<circle cx="55" cy="52" r="3" fill="#2b313b"/>
<path d="M32 26 h12 M32 32 h12" stroke="#3c4450" stroke-width="2"/>`;

  P.fridge = () => `
<rect x="26" y="8" width="48" height="86" rx="4" fill="#c8cdd4"/>
<path d="M50 8 v86" stroke="#a8adb4" stroke-width="1.5"/>
<rect x="32" y="24" width="12" height="26" rx="2" fill="#8b949f"/>
<rect x="56" y="20" width="12" height="20" rx="2" fill="#8b949f"/>`;

  P.sink = () => `
<rect x="14" y="34" width="72" height="30" rx="4" fill="#c8cdd4"/>
<rect x="20" y="40" width="60" height="18" rx="3" fill="#8b949f"/>
<path d="M50 22 q0 -10 8 -10 h10" stroke="#8b949f" stroke-width="5" fill="none"/>
<circle cx="50" cy="46" r="3" fill="#5a6a7a"/>`;

  P.fireplace = () => `
<rect x="14" y="18" width="72" height="70" rx="2" fill="#4a4038"/>
<rect x="24" y="34" width="52" height="54" fill="#1a1512"/>
<path d="M34 82 q6 -22 16 -22 q10 0 16 22 Z" fill="#e07a2a"/>
<path d="M42 82 q4 -14 8 -14 q4 0 8 14 Z" fill="#ffc24a"/>
<rect x="10" y="12" width="80" height="8" rx="2" fill="#5a5048"/>`;

  P.cable = () => `
<path d="M14 40 q22 24 44 8 q20 -14 30 6" stroke="#2b313b" stroke-width="6" fill="none" stroke-linecap="round"/>
<rect x="10" y="34" width="12" height="12" rx="2" fill="#4a525e"/>
<path d="M84 50 q8 6 4 16" stroke="#2b313b" stroke-width="6" fill="none"/>
<circle cx="50" cy="70" r="4" fill="#e05252" opacity=".8"/>`;

  P.umbrella = () => `
<path d="M14 46 q36 -40 72 0 q-10 -8 -18 -2 q-10 -10 -18 -2 q-10 -12 -18 0 q-10 -8 -18 4 Z" fill="#3a4a6a"/>
<rect x="47" y="46" width="6" height="42" fill="#5a3c23"/>
<path d="M53 88 q10 0 10 -8" stroke="#5a3c23" stroke-width="5" fill="none"/>`;

  P.shoe = () => `
<path d="M18 74 q0 -22 16 -24 q16 -2 20 8 l24 4 q10 2 10 12 v4 q0 6 -8 6 H26 q-8 0 -8 -10 Z" fill="#3a2a22"/>
<path d="M22 66 q14 -6 30 -2" stroke="#5a4238" stroke-width="3" fill="none"/>
<path d="M18 78 h62" stroke="#20170f" stroke-width="4"/>`;

  P.scarf = () => `
<path d="M24 30 q26 16 52 0 q-4 22 -26 30 q-22 -8 -26 -30 Z" fill="#7a2f3a"/>
<path d="M24 60 q10 20 4 34 M76 60 q-10 20 -4 34" stroke="#8a3a46" stroke-width="8" fill="none" stroke-linecap="round"/>`;

  P.mask = () => `
<path d="M20 40 q30 -20 60 0 q6 30 -14 42 q-16 10 -32 0 q-20 -12 -14 -42 Z" fill="#efe9d8"/>
<path d="M32 52 q8 -6 16 0 M52 52 q8 -6 16 0" stroke="#2b313b" stroke-width="4" fill="none"/>
<path d="M40 76 q10 6 20 0" stroke="#a83a3a" stroke-width="3" fill="none"/>`;

  P.coins = () => `
<ellipse cx="40" cy="68" rx="16" ry="7" fill="#d8b46a"/>
<ellipse cx="40" cy="64" rx="16" ry="7" fill="#f0c94a"/>
<ellipse cx="62" cy="56" rx="14" ry="6" fill="#d8b46a"/>
<ellipse cx="62" cy="52" rx="14" ry="6" fill="#f0c94a"/>
<path d="M28 46 l10 -14 h10 l-8 14 Z" fill="#a8e4ee" opacity=".9"/>`;

  P.card = () => `
<rect x="14" y="34" width="72" height="40" rx="3" fill="#efe9d8"/>
<rect x="14" y="34" width="72" height="10" fill="#4a3a52"/>
<path d="M22 56 h30 M22 64 h22" stroke="#9aa0ac" stroke-width="2.5"/>
<circle cx="68" cy="62" r="8" fill="#c8a968" opacity=".7"/>`;

  P.flower = () => `
<path d="M48 60 v34" stroke="#3f6a55" stroke-width="4"/>
<path d="M48 74 q-14 -4 -16 -16 q14 -2 16 12 Z" fill="#4a7a62"/>
<circle cx="50" cy="42" r="10" fill="#c85a6a"/>
<circle cx="38" cy="34" r="8" fill="#d97a86"/>
<circle cx="62" cy="34" r="8" fill="#e08a94"/>
<circle cx="50" cy="28" r="8" fill="#f0a0aa"/>
<circle cx="50" cy="42" r="4" fill="#f0d06a"/>`;

  P.lock = () => `
<path d="M34 46 v-12 q0 -16 16 -16 q16 0 16 16 v12" stroke="#8b949f" stroke-width="8" fill="none"/>
<rect x="24" y="44" width="52" height="44" rx="6" fill="#d8b46a"/>
<circle cx="50" cy="62" r="6" fill="#5a4a33"/>
<path d="M50 66 v8" stroke="#5a4a33" stroke-width="4"/>`;

  /* 无需阴影的（挂墙 / 平面）道具 */
  const WALL_PROPS = new Set(['painting', 'frame', 'window', 'curtain', 'door', 'clock',
    'mirror', 'safe', 'shelf', 'vent', 'wallstain', 'bookshelf', 'spotlight', 'monitor']);

  /* ---------------- 单个道具 SVG ---------------- */
  function propSvg(type, opt) {
    opt = opt || {};
    const fn = P[type] || P.card;
    const bg = opt.bg || 'transparent';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
${bg !== 'transparent' ? `<rect width="100" height="100" fill="${bg}"/>` : ''}
${opt.shadow ? `<ellipse cx="50" cy="94" rx="34" ry="5" fill="#000" opacity=".28"/>` : ''}
<g>${fn()}</g></svg>`;
  }

  /* ---------------- 场景 ---------------- */
  const THEME = {
    room: { wall1: '#3b302a', wall2: '#2a211c', floor1: '#5c4028', floor2: '#3a2818', line: '#6b4a2c' },
    gallery: { wall1: '#333c48', wall2: '#232a33', floor1: '#4c545f', floor2: '#333a44', line: '#5e6874' },
    cafe: { wall1: '#2c3a30', wall2: '#1e2820', floor1: '#6b5a44', floor2: '#4a3d2c', line: '#8a7a4a' },
    dock: { wall1: '#16222f', wall2: '#0d1620', floor1: '#4a3a28', floor2: '#2e2418', line: '#6b5238' },
    theater: { wall1: '#3a2430', wall2: '#26161f', floor1: '#5c3a28', floor2: '#3a2418', line: '#8a5a3a' },
    manor: { wall1: '#332a44', wall2: '#211a2e', floor1: '#5a5266', floor2: '#3a3444', line: '#7a7288' },
    office: { wall1: '#2e3644', wall2: '#1f2530', floor1: '#3f4655', floor2: '#2a2f3a', line: '#5a6474' }
  };

  function scene(cfg) {
    const t = THEME[cfg.theme] || THEME.room;
    const floorY = cfg.floorY || 430;
    let s = `<svg viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
<defs>
  <linearGradient id="gw" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${t.wall1}"/><stop offset="1" stop-color="${t.wall2}"/>
  </linearGradient>
  <linearGradient id="gf" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${t.floor1}"/><stop offset="1" stop-color="${t.floor2}"/>
  </linearGradient>
  <radialGradient id="gl" cx=".5" cy=".12" r=".7">
    <stop offset="0" stop-color="#ffe9b0" stop-opacity=".18"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="600" height="${floorY}" fill="url(#gw)"/>
<rect y="${floorY}" width="600" height="${750 - floorY}" fill="url(#gf)"/>
<rect y="${floorY - 6}" width="600" height="8" fill="${t.line}" opacity=".55"/>
<rect width="600" height="750" fill="url(#gl)"/>
${fx(cfg.fx, floorY)}
`;
    (cfg.props || []).forEach(p => {
      const sc = p.s == null ? 1 : p.s;
      const type = p.t;
      const isWall = WALL_PROPS.has(type);
      const fn = P[type] || P.card;
      const w = 100 * sc, h = 100 * sc;
      const shadow = !isWall ? `<ellipse cx="${p.x + w / 2}" cy="${p.y + h * 0.93}" rx="${w * 0.36}" ry="${h * 0.05}" fill="#000" opacity=".3"/>` : '';
      s += `<g class="hotspot" data-id="${p.id}" transform="translate(${p.x} ${p.y}) scale(${sc})">
  ${shadow}
  <g class="hs-body">${fn()}</g>
  <rect class="hs-hit" x="0" y="0" width="100" height="100"/>
</g>
`;
    });
    return s + `</svg>`;
  }

  function fx(kind, floorY) {
    if (!kind) return '';
    if (kind === 'rain') {
      let r = '';
      for (let i = 0; i < 40; i++) {
        const x = (i * 97) % 600, y = (i * 53) % 420;
        r += `<line x1="${x}" y1="${y}" x2="${x - 6}" y2="${y + 18}" stroke="#8fb8d8" stroke-width="1.5" opacity=".35"/>`;
      }
      return `<g>${r}</g>`;
    }
    if (kind === 'moon') return `<circle cx="500" cy="90" r="46" fill="#dfe8f5" opacity=".14"/><circle cx="500" cy="90" r="34" fill="#eef4ff" opacity=".18"/>`;
    if (kind === 'fog') return `<ellipse cx="300" cy="${floorY + 40}" rx="320" ry="60" fill="#c8d4e0" opacity=".07"/><ellipse cx="200" cy="${floorY + 90}" rx="240" ry="46" fill="#c8d4e0" opacity=".06"/>`;
    if (kind === 'dust') {
      let d = '';
      for (let i = 0; i < 26; i++) d += `<circle cx="${(i * 71) % 600}" cy="${120 + (i * 47) % 500}" r="${1 + (i % 3)}" fill="#ffe9b0" opacity=".2"/>`;
      return `<g>${d}</g>`;
    }
    if (kind === 'beam') return `<path d="M120 0 L200 0 L520 ${floorY} L60 ${floorY} Z" fill="#ffe9a8" opacity=".08"/>`;
    return '';
  }

  /* ---------------- 人物头像 ---------------- */
  function character(c) {
    c = c || {};
    const skin = c.skin || '#f0c9a4';
    const hair = c.hair || '#2b2118';
    const cloth = c.cloth || '#2f3a4a';
    const bg = c.bg || '#171b24';
    const acc = c.acc || 'none';
    const mood = c.mood || 'calm';
    let extra = '';
    if (acc === 'glasses') extra += `<path d="M30 50 h12 M58 50 h12" stroke="#2b313b" stroke-width="2.5"/><circle cx="38" cy="50" r="9" fill="none" stroke="#2b313b" stroke-width="2.5"/><circle cx="62" cy="50" r="9" fill="none" stroke="#2b313b" stroke-width="2.5"/><path d="M47 50 h6" stroke="#2b313b" stroke-width="2.5"/>`;
    if (acc === 'hat') extra += `<path d="M22 30 h56 v4 H22 Z" fill="#22282f"/><path d="M30 30 q0 -22 20 -22 q20 0 20 22 Z" fill="#2b313b"/>`;
    if (acc === 'scarf') extra += `<path d="M24 82 q26 12 52 0 v14 H24 Z" fill="#7a2f3a"/>`;
    if (acc === 'moustache') extra += `<path d="M40 62 q10 6 20 0" stroke="${hair}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    if (acc === 'earring') extra += `<circle cx="26" cy="58" r="3" fill="#f0c94a"/><circle cx="74" cy="58" r="3" fill="#f0c94a"/>`;
    if (acc === 'mask') extra += `<path d="M28 54 q22 -8 44 0 q4 22 -22 28 q-26 -6 -22 -28 Z" fill="#dfe2e7"/><path d="M34 62 h32" stroke="#b8bcc4" stroke-width="2"/>`;
    if (acc === 'collar') extra += `<path d="M40 82 L50 96 L60 82" stroke="#e8e6e0" stroke-width="3" fill="none"/>`;

    let hairPath = '';
    switch (c.hairStyle) {
      case 'long': hairPath = `<path d="M26 48 q0 -34 24 -34 q24 0 24 34 v30 q-8 6 -10 -4 q-4 20 -14 20 q-10 0 -14 -20 q-2 10 -10 4 Z" fill="${hair}"/>`; break;
      case 'bun': hairPath = `<path d="M28 46 q0 -32 22 -32 q22 0 22 32 v6 H28 Z" fill="${hair}"/><circle cx="50" cy="12" r="10" fill="${hair}"/>`; break;
      case 'pony': hairPath = `<path d="M28 46 q0 -32 22 -32 q22 0 22 32 v6 H28 Z" fill="${hair}"/><path d="M72 40 q18 10 10 40 q-6 14 -14 4" fill="${hair}"/>`; break;
      case 'bald': hairPath = `<path d="M30 40 q4 -12 20 -12 q16 0 20 12" stroke="${hair}" stroke-width="3" fill="none" opacity=".6"/>`; break;
      case 'cap': hairPath = `<path d="M28 42 q0 -30 22 -30 q22 0 22 30 Z" fill="${hair}"/><path d="M26 42 h50 l6 6 H24 Z" fill="#2b313b"/>`; break;
      default: hairPath = `<path d="M28 46 q0 -32 22 -32 q22 0 22 32 q-8 -10 -22 -10 q-14 0 -22 10 Z" fill="${hair}"/>`;
    }

    const brows = mood === 'angry' ? `<path d="M34 44 L46 48 M66 44 L54 48" stroke="#2b2118" stroke-width="2.5"/>`
      : mood === 'sad' ? `<path d="M34 48 L46 44 M66 48 L54 44" stroke="#2b2118" stroke-width="2.5"/>`
        : `<path d="M34 45 q6 -3 12 0 M54 45 q6 -3 12 0" stroke="#2b2118" stroke-width="2" fill="none"/>`;
    const mouth = mood === 'smile' ? `<path d="M42 64 q8 8 16 0" stroke="#a85a52" stroke-width="2.5" fill="none"/>`
      : mood === 'sad' ? `<path d="M42 68 q8 -7 16 0" stroke="#a85a52" stroke-width="2.5" fill="none"/>`
        : mood === 'fear' ? `<ellipse cx="50" cy="65" rx="5" ry="6" fill="#7a3a3a"/>`
          : `<path d="M44 65 h12" stroke="#a85a52" stroke-width="2.5"/>`;

    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="${bg}"/>
<path d="M18 100 q4 -30 32 -30 q28 0 32 30 Z" fill="${cloth}"/>
<rect x="42" y="62" width="16" height="14" fill="${skin}"/>
<ellipse cx="50" cy="48" rx="24" ry="27" fill="${skin}"/>
${hairPath}
<circle cx="40" cy="50" r="3.4" fill="#2b313b"/><circle cx="60" cy="50" r="3.4" fill="#2b313b"/>
${brows}${mouth}${extra}
</svg>`;
  }

  /* ---------------- 案件封面 ---------------- */
  function cover(types, theme) {
    const t = THEME[theme] || THEME.room;
    let g = '';
    const slots = [[70, 130, .9], [215, 120, .8], [360, 140, .95], [500, 120, .8]];
    types.slice(0, 4).forEach((ty, i) => {
      const [x, y, s] = slots[i];
      g += `<g transform="translate(${x} ${y}) scale(${s})">${(P[ty] || P.card)()}</g>`;
    });
    return `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${t.wall1}"/><stop offset="1" stop-color="${t.wall2}"/></linearGradient></defs>
<rect width="600" height="300" fill="url(#cg)"/>
<rect y="210" width="600" height="90" fill="${t.floor1}" opacity=".7"/>
<rect y="206" width="600" height="5" fill="${t.line}" opacity=".5"/>
<g opacity=".95">${g}</g>
<rect width="600" height="300" fill="#0b0e14" opacity=".18"/>
</svg>`;
  }

  /* ---------------- 启动页插画 ---------------- */
  function intro() {
    return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="ig" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2a3340"/><stop offset="1" stop-color="#14181f"/></linearGradient></defs>
<rect width="400" height="260" rx="0" fill="url(#ig)"/>
<circle cx="200" cy="70" r="120" fill="#f0b429" opacity=".07"/>
<g transform="translate(140 40) scale(1.15)">${P.desk()}</g>
<g transform="translate(30 120) scale(.75)">${P.bookshelf()}</g>
<g transform="translate(280 92) scale(.62)">${P.lamp()}</g>
<g transform="translate(176 132) scale(.42)">${P.letter()}</g>
<g transform="translate(60 176) scale(.34)">${P.cup()}</g>
<g transform="translate(230 176) scale(.5)" opacity=".9">${P.body()}</g>
<path d="M40 236 q60 -14 120 -4 q60 10 200 -6" stroke="#f0b429" stroke-width="2" opacity=".35" fill="none"/>
</svg>`;
  }

  /* ---------------- 拼图碎片（通关标记） ---------------- */
  function shard(i, n) {
    const cols = ['#f0b429', '#e05252', '#5aa9e6', '#4caf7d', '#a86ad0', '#e08a3a'];
    return `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6 h28 v28 h-10 l-4 -5 l-4 5 H6 Z" fill="${cols[i % cols.length]}" opacity=".9"/>
<path d="M6 6 h28 v28 h-10 l-4 -5 l-4 5 H6 Z" fill="none" stroke="#0d1017" stroke-width="2"/>
</svg>`;
  }

  return { prop: P, propSvg, scene, character, cover, intro, shard, THEME };
})();
