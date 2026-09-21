/* =========================================================
 * data.js —— 案件卷宗（场景 / 线索 / 推理 / 真相）
 * ========================================================= */

const DET = { name: '我', role: '调查者', face: { hairStyle: 'cap', hair: '#241d18', cloth: '#3d4a3f', acc: 'none', skin: '#f0c9a4' } };

const CASES = [
  /* ==================== CASE 01 ==================== */
  {
    id: 'c1', no: 'CASE 01', name: '雨夜书房', sub: '一杯凉透的茶',
    theme: 'room', difficulty: 1,
    cover: ['desk', 'body', 'cup', 'bookshelf'],
    desc: '古董商沈仲年反锁在书房中身亡，桌上是一杯喝了一半的茶。',
    cast: {
      chen: { name: '陈默', role: '死者的侄子', face: { hairStyle: 'short', hair: '#2b2118', cloth: '#2f3a4a', acc: 'none', mood: 'sad' } },
      fu: { name: '福伯', role: '老管家', face: { hairStyle: 'bald', hair: '#8a8a8a', cloth: '#3a3444', acc: 'collar', mood: 'calm' } },
      doctor: { name: '法医', role: '市立医院', face: { hairStyle: 'bun', hair: '#3b2b22', cloth: '#e6e6e6', acc: 'glasses', skin: '#f3d3b0', mood: 'calm' } }
    },
    intro: [
      { type: 'narration', text: '晚上十一点，雨下得像有人在天台上倒水。\n沈家的老宅亮着灯，书房的门从里面锁着，怎么敲都不开。' },
      { type: 'dialog', who: 'fu', mood: 'fear', text: '先生每天九点半要喝一杯茶，今晚……我先睡了，醒来敲门就没人应。' },
      { type: 'narration', text: '撞开门时，沈仲年趴在书桌上，右手还搭着那只青瓷茶杯。\n房间里只有雨声，和一只停摆的座钟。' }
    ],
    scenes: [
      {
        id: 's1', name: '书房', theme: 'room', fx: 'rain', floorY: 430,
        props: [
          { id: 'p1', t: 'body', x: 250, y: 440, s: 1.9, clue: 'k_body' },
          { id: 'p2', t: 'desk', x: 210, y: 400, s: 1.5, clue: 'k_desk' },
          { id: 'p3', t: 'cup', x: 330, y: 372, s: 0.5, clue: 'k_cup' },
          { id: 'p4', t: 'letter', x: 262, y: 392, s: 0.44, clue: 'k_letter' },
          { id: 'p5', t: 'bookshelf', x: 30, y: 110, s: 1.6, clue: 'x_shelf' },
          { id: 'p6', t: 'window', x: 250, y: 96, s: 1.3, clue: 'k_window' },
          { id: 'p7', t: 'clock', x: 452, y: 118, s: 0.95, clue: 'k_clock' },
          { id: 'p8', t: 'safe', x: 448, y: 268, s: 0.72, clue: 'x_safe' },
          { id: 'p9', t: 'plant', x: 500, y: 452, s: 1.1, clue: 'x_plant' },
          { id: 'p10', t: 'rug', x: 150, y: 596, s: 1.9, clue: 'x_rug' }
        ]
      },
      {
        id: 's2', name: '门厅与走廊', theme: 'room', fx: 'rain', floorY: 420,
        props: [
          { id: 'q1', t: 'door', x: 240, y: 60, s: 2.1, clue: 'k_door' },
          { id: 'q2', t: 'umbrella', x: 60, y: 300, s: 0.9, clue: 'k_umb' },
          { id: 'q3', t: 'shoe', x: 300, y: 470, s: 1.0, clue: 'x_shoe' },
          { id: 'q4', t: 'phone', x: 452, y: 452, s: 0.8, clue: 'k_phone' },
          { id: 'q5', t: 'footprint', x: 190, y: 580, s: 0.7, clue: 'x_foot' },
          { id: 'q6', t: 'mirror', x: 30, y: 90, s: 0.85, clue: 'x_mirror' }
        ]
      }
    ],
    clues: {
      k_body: { name: '死者姿态', icon: 'body', key: true, text: '沈仲年伏在桌沿，右手指节发青，指甲缝里有极少量白色粉末。没有挣扎痕迹，桌面上的纸张整齐——他是坐着喝完茶，然后倒下的。', quote: '毒，是入口即倒的那一种。' },
      k_desk: { name: '书桌抽屉', icon: 'desk', key: false, text: '抽屉里是刚立的遗嘱：全部藏品捐给市博物馆，侄子陈默只得到这栋房子。落款是三天前。纸角有一道新的折痕——有人反复展开又折上。' },
      k_cup: { name: '半杯残茶', icon: 'cup', key: true, text: '青瓷杯里剩三分之一的茶，茶汤浑浊，杯底有一层化不开的细粉。杯沿只有一枚唇印，朝向死者自己坐的位置——今晚没有人陪他喝茶。', quote: '一个客人都没有，那毒是谁下的？' },
      k_letter: { name: '桌上的信', icon: 'letter', key: false, text: '一封没寄出的信，写给"阿照"：「事情我全想起来了，明早我会去警局。」日期是昨天。收信人一栏被撕掉了。' },
      x_shelf: { name: '书架', icon: 'bookshelf', key: false, text: '一整面明清瓷器和旧书，第三层空出一格，积灰的形状是圆的——最近被取走了一件东西。' },
      k_window: { name: '窗户插销', icon: 'window', key: false, text: '窗户从内插好，但插销槽下有一道新鲜的划痕，像是被细硬的东西从外面挑过。窗台干燥，没有水迹——雨夜里，这扇窗今晚没被打开过。', quote: '密室是做给别人看的。' },
      k_clock: { name: '停摆的座钟', icon: 'clock', key: true, text: '座钟停在 21:40，但钟摆是被外力按住才停的——齿轮上有一枚新鲜的指纹，位置在钟面正下方，只有伸手去拨指针才会留下。' },
      x_safe: { name: '墙上的暗格', icon: 'safe', key: false, text: '暗格是空的，门开着。里面没有撬痕，锁芯干净得发亮——知道密码的人开过它。' },
      x_plant: { name: '龟背竹', icon: 'plant', key: false, text: '叶面上落了一层灰，唯独朝向书桌那一侧被人擦过。有人站在那里看了很久。' },
      x_rug: { name: '地毯', icon: 'rug', key: false, text: '地毯边缘翘起一角，下面压着一小截暗黄色的线——尼龙鱼线，被拉断的。' },
      k_door: { name: '门与门缝', icon: 'door', key: true, text: '门锁是老式旋钮锁，从里面旋上即可。门缝底部夹着一截不到两厘米的尼龙鱼线，另一头垂在门内地毯边上——把线一抽，旋钮就会跟着转到"锁"的位置。', quote: '人早走了，门是后来才锁上的。' },
      k_umb: { name: '门厅的伞', icon: 'umbrella', key: true, text: '伞架上只有一把黑伞，伞骨内侧是湿的，伞面却已经干了大半——它在室内撑开过至少两个小时。伞柄上刻着"陈"字。而陈默说他九点就离开了。' },
      x_shoe: { name: '玄关的鞋', icon: 'shoe', key: false, text: '死者的拖鞋在，陈默常穿的那双皮鞋不在鞋柜里。鞋柜里多了双沾泥的胶底鞋，不是这个家的尺码。' },
      k_phone: { name: '遗落的手机', icon: 'phone', key: false, text: '手机落在门厅柜上，20:55 有一条发给陈默的消息：「你来了就进来，门没锁。」21:40 之后没有任何操作记录——那时它已经不在沈仲年手里了。' },
      x_foot: { name: '地板上的水痕', icon: 'footprint', key: false, text: '从门口到楼梯有一串半干的脚印，鞋码 42，来回两趟。第二趟的步距明显更大——他在跑。' },
      x_mirror: { name: '走廊镜子', icon: 'mirror', key: false, text: '镜面被人用袖子擦过，边缘还留着一点水痕。照镜子的人，不太想让人看见自己在擦什么。' }
    },
    questions: [
      {
        q: '沈仲年的死亡时间大约是？', sub: '（依据现场物证推断）',
        options: [
          { t: '21:40 前后，即座钟停摆的时刻', ok: false, r: '座钟是被人为拨停的，齿轮上的指纹说明有人碰过它。停摆时刻不等于死亡时刻。' },
          { t: '20:55 之后不久，喝茶的那段时间', ok: true, r: '正确。20:55 死者还在发消息叫人进来，此后手机再无操作；毒性发作极快，死亡应在饮茶后十几分钟内。' },
          { t: '凌晨，管家发现尸体时', ok: false, r: '尸体已出现早期僵硬，法医判断死亡远早于凌晨。' }
        ],
        result: '时间线上最大的破绽，是那只在 21:40 才停下的钟——它被留在现场，专门用来骗人。'
      },
      {
        q: '书房是怎样变成"密室"的？',
        sub: '',
        options: [
          { t: '凶手从窗户翻进来，再从窗户离开', ok: false, r: '窗台干燥无雨迹，插销划痕是从外侧挑拨留下的伪装，窗户今晚根本没被打开过。' },
          { t: '凶手离开后用尼龙鱼线从门缝把旋钮拉到"锁"位', ok: true, r: '正确。门缝里残留的鱼线、地毯下被拉断的另一截，都是这套机关的证据。' },
          { t: '死者自己锁门后服毒自杀', ok: false, r: '杯沿只有一枚唇印且杯底有未溶粉末，若是自服，不会有"再添一次毒"的必要，也没有那封要寄给"阿照"的信。' }
        ],
        result: '把门反锁的不是死人，是一个急着离开却想让一切看起来像死人做的事的人。'
      },
      {
        q: '下毒的人是谁？',
        sub: '',
        options: [
          { t: '管家福伯', ok: false, r: '福伯的胶底鞋尺码不符，且他送茶的时间在 21:00 之前，与毒发时间对不上。' },
          { t: '侄子陈默', ok: true, r: '正确。伞柄上的"陈"字、伞在室内撑开两小时、手机里那条 20:55 的短信，都说明他进屋后一直待到 21:40 之后。' },
          { t: '博物馆的某位负责人', ok: false, r: '遗嘱里博物馆是受益方，但现场没有任何外人进入的痕迹。' }
        ],
        result: '他改写遗嘱无望，于是先下毒、再布置密室、最后拨停座钟——唯独忘了自己那把还在滴水的伞。'
      }
    ],
    truth: {
      title: '真相：凉透的那杯茶',
      text: '陈默在 20:55 收到叔叔的短信进门，亲手把放了毒的茶端到了书桌上。\n沈仲年喝下后十几分钟便没了气息，那时大约是 21:10。\n陈默没有立刻走。他打开暗格取走了那件最值钱的瓷器，翻看了遗嘱，然后在 21:40 拨停座钟，用鱼线从门外把旋钮拉到"锁"的位置，做出一副密室的样子。\n他以为自己算准了一切。可他忘了，雨夜里唯一的那把伞，还在门厅里替他站着。',
      ending: [
        { type: 'dialog', who: 'chen', mood: 'fear', text: '……我只是想让他改遗嘱。他说他要去警局，说"事情全想起来了"。' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '二十年前那批货的事，你叔叔一直记着。他不是要告你，他是想给你一个自己开口的机会。' },
        { type: 'narration', text: '雨停的时候，天已经亮了。伞被收进证物袋，编号 07。\n在很多年后，我还会想起那间书房——一个人临死前，还在等一个愿意自首的人。' }
      ]
    }
  },

  /* ==================== CASE 02 ==================== */
  {
    id: 'c2', no: 'CASE 02', name: '画廊失窃', sub: '《夜莺》飞走了',
    theme: 'gallery', difficulty: 1,
    cover: ['frame', 'camera', 'glove', 'coffee'],
    desc: '闭馆之夜，镇馆之作《夜莺》不翼而飞，唯一的保安昏睡在值班室。',
    cast: {
      lin: { name: '林漾', role: '策展人', face: { hairStyle: 'long', hair: '#3b2b22', cloth: '#6a3a52', acc: 'earring', skin: '#f3d3b0', mood: 'calm' } },
      bao: { name: '老周', role: '夜班保安', face: { hairStyle: 'bald', hair: '#7a7a7a', cloth: '#2f4a3a', acc: 'moustache', mood: 'fear' } },
      DET: DET
    },
    intro: [
      { type: 'narration', text: '清晨七点，市立画廊的玻璃门完好无损。\n展厅正中央，那幅《夜莺》只剩下一个空画框，框内的画布是被利刃割走的。' },
      { type: 'dialog', who: 'bao', mood: 'fear', text: '我喝了一口咖啡就想睡……明明那咖啡是我自己泡的啊。' }
    ],
    scenes: [
      {
        id: 's1', name: '主展厅', theme: 'gallery', fx: 'dust', floorY: 440,
        props: [
          { id: 'p1', t: 'frame', x: 210, y: 120, s: 1.9, clue: 'k_frame' },
          { id: 'p2', t: 'camera', x: 20, y: 130, s: 0.85, clue: 'k_cam' },
          { id: 'p3', t: 'monitor', x: 452, y: 110, s: 0.85, clue: 'k_mon' },
          { id: 'p4', t: 'coffee', x: 300, y: 470, s: 0.95, clue: 'k_coffee' },
          { id: 'p5', t: 'vent', x: 250, y: 60, s: 0.6, clue: 'x_vent' },
          { id: 'p6', t: 'statue', x: 60, y: 420, s: 1.1, clue: 'x_statue' },
          { id: 'p7', t: 'rope', x: 380, y: 500, s: 0.7, clue: 'x_rope' },
          { id: 'p8', t: 'powder', x: 180, y: 560, s: 0.9, clue: 'k_powder' }
        ]
      },
      {
        id: 's2', name: '储藏室', theme: 'gallery', floorY: 430,
        props: [
          { id: 'q1', t: 'crate', x: 40, y: 400, s: 1.2, clue: 'k_crate' },
          { id: 'q2', t: 'glove', x: 300, y: 452, s: 0.85, clue: 'k_glove' },
          { id: 'q3', t: 'lock', x: 452, y: 120, s: 0.85, clue: 'k_lock' },
          { id: 'q4', t: 'shelf', x: 200, y: 130, s: 1.0, clue: 'x_shelf' },
          { id: 'q5', t: 'trash', x: 430, y: 440, s: 1.0, clue: 'k_trash' },
          { id: 'q6', t: 'ticket', x: 150, y: 590, s: 0.7, clue: 'k_ticket' }
        ]
      }
    ],
    clues: {
      k_frame: { name: '空画框', icon: 'frame', key: true, text: '画框四角没有撬动痕迹，画布是被美工刀沿着内沿整齐割下的。框背面的挂钩螺丝少了一颗——有人先把整幅画取下来，再慢慢割。', quote: '不慌不忙，说明他不担心有人进来。' },
      k_cam: { name: '展厅摄像头', icon: 'camera', key: false, text: '三只摄像头，正对《夜莺》的那一只被转了 15 度，镜头正对着墙角。转动支架上的指纹被擦过，但支架底座的积灰留下一道半月形的推移痕。' },
      k_mon: { name: '监控主机', icon: 'monitor', key: false, text: '硬盘在 23:40 到 00:20 之间被人为覆盖了 40 分钟。但缓存卡里还留着缩略帧：23:52，一个穿着深红外套的人推着清洁车经过展厅。' },
      k_coffee: { name: '值班室的咖啡', icon: 'coffee', key: true, text: '杯底残留的液体里有白色沉淀，是速溶安眠药。糖包被拆开两包——老周不喝甜的，这杯是别人替他泡的。' },
      x_vent: { name: '天花板通风口', icon: 'vent', key: false, text: '通风口栅栏完好，尺寸只有 30×30 厘米，成年人钻不过去。所谓"从通风口潜入"，只可能出现在电影里。' },
      x_statue: { name: '展厅雕塑', icon: 'statue', key: false, text: '雕塑底座有一圈新擦的蜡痕。它被挪动过大约半米，正好挡住摄像头的原视角。' },
      x_rope: { name: '地上的尼龙绳', icon: 'rope', key: false, text: '一段被剪断的挂画绳，切口平整。画是从墙上取下来的，不是被扯下来的。' },
      k_powder: { name: '地上的粉末', icon: 'powder', key: false, text: '地板上有一小片滑石粉——手套为了防止粘连会扑粉。粉末从展厅一路延伸到储藏室门口，中间在墙边断了一截，像是有人脱下手套又戴上。' },
      k_crate: { name: '木箱夹层', icon: 'crate', key: true, text: '准备运往修复中心的木箱，底板被人拆过又钉回去，钉眼是新的。箱子里现在塞满了气泡纸，但底板上还留着一点亚麻画布的纤维。' },
      k_glove: { name: '丢弃的手套', icon: 'glove', key: true, text: '垃圾桶里的乳胶手套，内侧有滑石粉，指尖沾着松节油和一点群青颜料——只有接触过那幅画的人才会沾上。手套是 M 号，展厅工作人员里只有三个人的手是这个尺寸。' },
      k_lock: { name: '储藏室挂锁', icon: 'lock', key: true, text: '锁是开着的，锁梁上没有任何撬痕或万能钥匙的划伤。这把锁只有两把钥匙：馆长一把，策展人一把。' },
      x_shelf: { name: '工具架', icon: 'shelf', key: false, text: '美工刀少了一把，登记本上最后一次借出记录是上周，签名一栏空着。' },
      k_trash: { name: '垃圾桶', icon: 'trash', key: false, text: '桶底层压着一件深红外套，袖口沾着亚麻纤维。外套口袋里有一张明晚的航班登机牌，名字被撕掉了一半。' },
      k_ticket: { name: '当晚入场记录', icon: 'ticket', key: true, text: '闭馆后进出登记表上只有三个人：老周、清洁工、策展人林漾。清洁工那一栏的字迹与本人不符，笔顺过于熟练——是照着写的。' }
    },
    questions: [
      {
        q: '盗贼是如何避开监控的？',
        sub: '',
        options: [
          { t: '从天花板通风口爬进来的', ok: false, r: '通风口只有 30 厘米见方，成年人无法通过，栅栏也完好。' },
          { t: '调整摄像头角度并覆盖了录像', ok: true, r: '正确。支架底座的半月形推痕说明镜头被转过，硬盘也有 40 分钟的人为覆盖。' },
          { t: '监控当晚本来就故障了', ok: false, r: '主机运行日志正常，只有那 40 分钟被覆盖，不是故障。' }
        ],
        result: '知道摄像头在哪、知道主机怎么覆盖录像——这是只有内部人员才有的从容。'
      },
      {
        q: '《夜莺》最可能被藏在哪里？',
        sub: '',
        options: [
          { t: '垃圾桶里的红外套裹着带走了', ok: false, r: '外套袖口只有亚麻纤维，没有画布整幅的厚度，且监控缩略帧里那人推的是清洁车。' },
          { t: '塞进运往修复中心的木箱夹层', ok: true, r: '正确。底板被拆过又钉回，钉眼是新的，底板上残留亚麻画布纤维。' },
          { t: '已经从通风口运出去了', ok: false, r: '尺寸不成立。' }
        ],
        result: '最危险的地方最安全——那口木箱今早八点就会被装上卡车，运出这座城市。'
      },
      {
        q: '谁割走了《夜莺》？',
        sub: '',
        options: [
          { t: '夜班保安老周', ok: false, r: '老周是安眠药的受害者，泡咖啡的糖包也不是他的习惯。' },
          { t: '馆长', ok: false, r: '馆长当晚在外地，且他的钥匙没有离开过他本人。' },
          { t: '策展人林漾', ok: true, r: '正确。滑石粉手套是她的尺寸，储藏室挂锁只有她和馆长有钥匙，入场登记表上"清洁工"是她伪造的。' }
        ],
        result: '她给保安泡了一杯加了料的咖啡，转动了镜头，割下画布，再把它钉进明天就要出发的木箱。'
      }
    ],
    truth: {
      title: '真相：飞走的夜莺',
      text: '林漾泡了两杯咖啡，一杯给老周，一杯自己拿着。\n23:40 她覆盖掉监控，把镜头转向墙角，然后从储藏室取出美工刀——那把锁，只有她和馆长有钥匙。\n割下画布用了十一分钟。她把手套脱掉一次，因为指尖沾了太多群青。\n画被钉进运往修复中心的木箱夹层，明早八点发车，而她订了明晚的航班。\n她唯一的疏漏，是替老周泡咖啡时，习惯性地加了两包糖。',
      ending: [
        { type: 'dialog', who: 'lin', mood: 'sad', text: '那幅画本来就该属于它真正的作者。馆里用三十万买下它，转手估值两千万。' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '所以你把它送回去了？还是送去了你自己的买家那里？' },
        { type: 'narration', text: '木箱在收费站被拦下时，画布完好无损。\n只是从此以后，再没人见过那只夜莺。' }
      ]
    }
  }
,

  /* ==================== CASE 03 ==================== */
  {
    id: 'c3', no: 'CASE 03', name: '最后一杯', sub: '甜到要命',
    theme: 'cafe', difficulty: 2,
    cover: ['coffee', 'plate', 'syringe', 'card'],
    desc: '咖啡馆老板倒在自家卡座上，桌上是两块蛋糕、两只杯子，和一支空的肾上腺素笔。',
    cast: {
      zhou: { name: '周戈', role: '合伙人', face: { hairStyle: 'short', hair: '#1f1a16', cloth: '#4a3a2c', acc: 'moustache', mood: 'calm' } },
      may: { name: '阿May', role: '甜品师', face: { hairStyle: 'pony', hair: '#4a2f22', cloth: '#e6d8c8', acc: 'earring', skin: '#f5d8b8', mood: 'sad' } },
      doctor: { name: '急救医生', role: '120', face: { hairStyle: 'short', hair: '#2b2118', cloth: '#dfe4ea', acc: 'mask', mood: 'calm' } }
    },
    intro: [
      { type: 'narration', text: '「慢一点」咖啡馆打烊前十分钟，老板许知言死在自己的老位置上。\n桌上两块蛋糕，一只杯子有口红印，另一只没有。' },
      { type: 'dialog', who: 'may', mood: 'fear', text: '那块蛋糕是我做的，可订单上明明写了"忌花生"……我从来没用过花生酱！' }
    ],
    scenes: [
      {
        id: 's1', name: '卡座', theme: 'cafe', fx: 'dust', floorY: 420,
        props: [
          { id: 'p1', t: 'table', x: 180, y: 300, s: 1.5, clue: 'k_table' },
          { id: 'p2', t: 'coffee', x: 205, y: 268, s: 0.46, clue: 'k_cup1' },
          { id: 'p3', t: 'coffee', x: 320, y: 272, s: 0.46, clue: 'k_cup2' },
          { id: 'p4', t: 'plate', x: 250, y: 330, s: 0.7, clue: 'k_cake' },
          { id: 'p5', t: 'phone', x: 396, y: 330, s: 0.55, clue: 'k_phone' },
          { id: 'p6', t: 'syringe', x: 150, y: 340, s: 0.6, clue: 'k_pen' },
          { id: 'p7', t: 'bag', x: 460, y: 420, s: 1.0, clue: 'k_bag' },
          { id: 'p8', t: 'card', x: 60, y: 470, s: 0.7, clue: 'k_card' },
          { id: 'p9', t: 'window', x: 250, y: 70, s: 1.0, clue: 'x_window' },
          { id: 'p10', t: 'chair', x: 430, y: 250, s: 1.0, clue: 'x_chair' }
        ]
      },
      {
        id: 's2', name: '后厨', theme: 'cafe', floorY: 430,
        props: [
          { id: 'q1', t: 'trash', x: 300, y: 380, s: 1.2, clue: 'k_trash' },
          { id: 'q2', t: 'bottle', x: 180, y: 400, s: 0.9, clue: 'x_bottle' },
          { id: 'q3', t: 'fridge', x: 30, y: 190, s: 1.7, clue: 'k_fridge' },
          { id: 'q4', t: 'sink', x: 250, y: 150, s: 1.0, clue: 'x_sink' },
          { id: 'q5', t: 'knife', x: 430, y: 440, s: 0.8, clue: 'x_knife' },
          { id: 'q6', t: 'pillbox', x: 150, y: 540, s: 0.7, clue: 'k_pills' },
          { id: 'q7', t: 'diary', x: 400, y: 560, s: 0.7, clue: 'k_diary' },
          { id: 'q8', t: 'monitor', x: 452, y: 90, s: 0.7, clue: 'k_mon' }
        ]
      }
    ],
    clues: {
      k_table: { name: '卡座桌面', icon: 'table', key: false, text: '桌面刚擦过，但两个人位之间的桌缝里还留着一点奶油——蛋糕是被从对面推过来的，不是自己端过来的。' },
      k_cup1: { name: '无口红的杯子', icon: 'coffee', key: false, text: '这只杯子是死者自己的，杯壁上有他习惯性的握痕（左手虎口朝向内侧）。喝到剩一半。' },
      k_cup2: { name: '带口红的杯子', icon: 'coffee', key: false, text: '另一只杯子口沿有正红色唇印，只喝了不到一口——主人根本没打算久坐。杯底压着一张折起来的收银小票，20:47 结账，付款人是"周"。', quote: '来了，但只是坐了一下。' },
      k_cake: { name: '剩下的半块蛋糕', icon: 'plate', key: true, text: '死者那块吃了一半，断面上嵌着几粒碾碎的花生碎，混在夹层奶油里——不是撒在表面，是拌进去的。', quote: '想让人以为是意外，就得把它藏进味道里。' },
      k_phone: { name: '死者的手机', icon: 'phone', key: false, text: '20:30 日程提醒：「周戈，谈股份转让」。20:52 拨出最后一通电话，通话 7 秒，未接通。相册里最后一张照片是后厨垃圾桶，拍摄于 20:48。' },
      k_pen: { name: '空的肾上腺素笔', icon: 'syringe', key: true, text: '笔已经推空，针头却还是干净的——它没有被扎进大腿。笔帽滚在桌子底下，笔身上只有死者的指纹，可是他发病时是一个人。', quote: '有人替他"用完"了这支笔。' },
      k_bag: { name: '死者的随身包', icon: 'bag', key: false, text: '包里有两支笔——一支蓝色日常用（写着 MF， multifunction），一支红色应急。红的被抽走了，留着空的塑料托槽。' },
      k_card: { name: '掉落的订单卡', icon: 'card', key: true, text: '订单卡上"忌花生"三个字所在的那一栏是被撕掉的，撕口整齐，撕的时候纸还在夹板上——只有站在点单机前的人才能撕得这么顺。' },
      x_window: { name: '临街的窗', icon: 'window', key: false, text: '玻璃上贴着"今日限定：花生巧克力"，字是打印的。死者对花生过敏，全店都知道。' },
      x_chair: { name: '对面的椅子', icon: 'chair', key: false, text: '椅面往后拉开约 40 厘米，坐过但很快起身。椅子腿下的地面有一小块口红蹭痕。' },
      k_trash: { name: '后厨垃圾桶', icon: 'trash', key: true, text: '桶里最上面是一次性手套（内里外翻），下面压着一瓶快见底的花生酱，瓶身油渍是新的。桶盖内侧还留着半枚指纹，位置在掀盖的边缘。' },
      x_bottle: { name: '调料架上的瓶子', icon: 'bottle', key: false, text: '货架上那瓶花生酱是满的、封着的，落灰。垃圾桶里那瓶，不是从这拿的。' },
      k_fridge: { name: '冷藏柜', icon: 'fridge', key: false, text: '冷藏柜第二层放着两块留存的当日样品蛋糕，都是同一批。其中一块的夹层和死者吃的那块一样——有花生碎。这批货昨晚就被单独准备出来了。' },
      x_sink: { name: '水槽', icon: 'sink', key: false, text: '水槽里泡着一只杯子，洗洁精还没冲净。有人不急着走，先洗了东西。' },
      x_knife: { name: '料理刀', icon: 'knife', key: false, text: '刀刃干净，没有花生油残留。蛋糕夹层不是用刀拌的，是用刮刀。' },
      k_pills: { name: '抗过敏药盒', icon: 'pillbox', key: false, text: '药盒里只剩两板，有效期到上个月——他一直没补货，全靠那支笔。' },
      k_diary: { name: '后厨的记录本', icon: 'diary', key: false, text: '进货记录最后一页被撕了。压痕显示上面写着：' + '「周 借出：花生酱 ×1，20:12」' + '。' },
      k_mon: { name: '后厨监控', icon: 'monitor', key: true, text: '20:50，有人从后门进来，戴着帽子，手里提着一个小纸袋；20:56 从后门出去，纸袋没了。那身衣服，和合伙人周戈今天穿的一样。' }
    },
    questions: [
      {
        q: '许知言的直接死因是？',
        sub: '',
        options: [
          { t: '咖啡中被下了毒', ok: false, r: '两只杯子分别化验，除了咖啡因没有任何异常。' },
          { t: '花生过敏引发的过敏性休克', ok: true, r: '正确。蛋糕夹层里拌了花生碎，而他的肾上腺素笔被人事先用掉了。' },
          { t: '突发心脏疾病', ok: false, r: '死者无心脏病史，且喉部水肿、皮肤荨麻疹都指向过敏反应。' }
        ],
        result: '杀人不必亲手动刀——只要让救命的东西先失效。'
      },
      {
        q: '为什么订单卡上的"忌花生"会被撕掉？',
        sub: '',
        options: [
          { t: '甜品师不小心撕坏的', ok: false, r: '撕口整齐且在夹板上完成，不是失误。' },
          { t: '为了让甜品师按常规配方制作，制造"意外"', ok: true, r: '正确。撕掉备注后，制作流程里就不存在"忌花生"，事故看起来就是一场疏忽。' },
          { t: '死者自己撕的，表示已痊愈', ok: false, r: '死者包里的应急笔和过期药说明他从未痊愈。' }
        ],
        result: '凶手要的不是"无人察觉"，而是"查起来像一场意外"。'
      },
      {
        q: '撕掉订单卡并拌入花生的人是谁？',
        sub: '',
        options: [
          { t: '甜品师阿May', ok: false, r: '她整晚在前台，且冷藏柜里那两块"样品"是昨晚就备好的，她今天根本没有单独制作。' },
          { t: '合伙人周戈', ok: true, r: '正确。20:12 借走花生酱、20:30 谈股份转让、20:47 结账、20:50 从后门进出——四条记录串成了同一条线。' },
          { t: '送货的供应商', ok: false, r: '供应商没有进过点单机所在的区域，也没有动机。' }
        ],
        result: '他只想让股份转让谈不成时，还有另一条路可走。'
      }
    ],
    truth: {
      title: '真相：甜到要命',
      text: '周戈在 20:12 从后厨借走花生酱，20:30 坐下来谈股份转让。\n谈崩了。他起身前顺手撕掉了订单卡上那三个字，又把早已备好的那块蛋糕推到对面。\n20:47 他买了单，留下一只只喝了一口的杯子。20:50 他从后门回来，戴着手套把花生酱瓶丢进垃圾桶，顺手用桌上那支笔抵在桌沿推空——针头始终没碰到皮肤。\n他算准了发病到失去意识有十几分钟，也知道那支笔是唯一的生路。\n只有一件事他没算到：许知言在倒下前，拍下了那只垃圾桶。',
      ending: [
        { type: 'dialog', who: 'zhou', mood: 'angry', text: '我跟他合伙九年。九年！他说散就散，连个过渡都不给。' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '所以你让他死在自己最喜欢的座位上，还替他付了最后一次账。' },
        { type: 'narration', text: '店后来改了名字，叫「忌口」。\n菜单第一页上，用很粗的字写着：本店所有出品，不含花生。' }
      ]
    }
  },

  /* ==================== CASE 04 ==================== */
  {
    id: 'c4', no: 'CASE 04', name: '码头夜航', sub: '退潮之后',
    theme: 'dock', difficulty: 2,
    cover: ['container', 'boat', 'net', 'lock'],
    desc: '线人被发现死在码头浅滩，看似落水。可昨夜的潮水，根本到不了那个位置。',
    cast: {
      shao: { name: '邵平', role: '报关员', face: { hairStyle: 'short', hair: '#2b2118', cloth: '#3a4450', acc: 'glasses', mood: 'calm' } },
      k: { name: '老K', role: '渔船船长', face: { hairStyle: 'bald', hair: '#6a6a6a', cloth: '#2f4a5a', acc: 'moustache', mood: 'angry' } },
      hai: { name: '海测员', role: '水文站', face: { hairStyle: 'bun', hair: '#3b2b22', cloth: '#4a5a6a', acc: 'none', skin: '#e8c49c', mood: 'calm' } }
    },
    intro: [
      { type: 'narration', text: '凌晨五点，退潮。\n一具尸体半陷在三号泊位的淤泥里，外套湿透，手腕上有一道深紫色的勒痕。' },
      { type: 'dialog', who: 'k', mood: 'angry', text: '我船是 22:10 出的海，那时候他还在岸上跟我挥手呢！' }
    ],
    scenes: [
      {
        id: 's1', name: '三号泊位', theme: 'dock', fx: 'fog', floorY: 460,
        props: [
          { id: 'p1', t: 'container', x: 20, y: 250, s: 2.1, clue: 'x_con1' },
          { id: 'p2', t: 'container', x: 330, y: 260, s: 2.0, clue: 'x_con2' },
          { id: 'p3', t: 'boat', x: 210, y: 380, s: 1.5, clue: 'k_boat' },
          { id: 'p4', t: 'net', x: 430, y: 420, s: 1.0, clue: 'k_net' },
          { id: 'p5', t: 'bloodstain', x: 250, y: 560, s: 0.8, clue: 'k_tide' },
          { id: 'p6', t: 'footprint', x: 120, y: 600, s: 0.75, clue: 'k_foot' },
          { id: 'p7', t: 'rope', x: 380, y: 580, s: 0.85, clue: 'k_rope' },
          { id: 'p8', t: 'crate', x: 40, y: 400, s: 0.85, clue: 'x_crate' },
          { id: 'p9', t: 'anchor', x: 480, y: 330, s: 0.85, clue: 'x_anchor' }
        ]
      },
      {
        id: 's2', name: '货运仓库', theme: 'dock', floorY: 440,
        props: [
          { id: 'q1', t: 'locker', x: 40, y: 240, s: 2.0, clue: 'k_locker' },
          { id: 'q2', t: 'suitcase', x: 250, y: 350, s: 0.95, clue: 'k_case' },
          { id: 'q3', t: 'monitor', x: 420, y: 110, s: 0.8, clue: 'k_mon' },
          { id: 'q4', t: 'phone', x: 180, y: 470, s: 0.7, clue: 'k_phone' },
          { id: 'q5', t: 'lock', x: 350, y: 462, s: 0.7, clue: 'k_lock' },
          { id: 'q6', t: 'cable', x: 240, y: 560, s: 0.9, clue: 'k_cable' },
          { id: 'q7', t: 'barrel', x: 430, y: 330, s: 1.0, clue: 'x_barrel' },
          { id: 'q8', t: 'card', x: 120, y: 470, s: 0.6, clue: 'k_form' }
        ]
      }
    ],
    clues: {
      x_con1: { name: '一号集装箱', icon: 'container', key: false, text: '箱体编号 CN-7731，铅封完好，报关单上写的是"农机配件"。箱底缝隙渗出一点冷却水——里面装的是需要恒温的东西。' },
      x_con2: { name: '二号集装箱', icon: 'container', key: false, text: '箱门虚掩，里面是空的。地面上有两道并行的拖拽痕迹，从门口一直延伸向泊位。' },
      k_boat: { name: '渔船航行日志', icon: 'boat', key: false, text: '日志上写 22:10 离港。但码头广播记录显示，21:30 就有人用这台对讲机呼叫过拖船。日志的墨水边缘晕开——是新写的，写在旧页上。', quote: '字可以补，潮水不会说谎。' },
      k_net: { name: '渔网上的纤维', icon: 'net', key: false, text: '网眼上勾着一撮深灰色羊毛纤维，和死者外套不同——是另一件衣服留下的。仓库里穿这种颜色羊毛外套的人，只有一个。' },
      k_tide: { name: '潮位线', icon: 'bloodstain', key: true, text: '尸体所在位置的淤泥，比昨夜最高潮位线还高出 1.2 米。换句话说，昨夜的海水根本淹不到这里——他不是在这里落的水。', quote: '海水到不了的地方，尸体却在那里。' },
      k_foot: { name: '淤泥里的脚印', icon: 'footprint', key: true, text: '两行脚印：一行 42 码从仓库方向来，另一行同样 42 码折返。来时步距小，回时步距大，且回程脚印更深——第二次手里多了大约二十公斤。' },
      k_rope: { name: '缆绳', icon: 'rope', key: false, text: '缆绳末端沾着一点暗色污渍和皮屑。绳股之间夹着同样的深灰羊毛纤维。' },
      x_crate: { name: '木箱', icon: 'crate', key: false, text: '空箱，内壁贴着"防静电"标签。装的是电子元件，不是农机配件。' },
      x_anchor: { name: '备用锚', icon: 'anchor', key: false, text: '锚链少了一截，断口是新切割的，不是磨断的。' },
      k_locker: { name: '三号储物柜', icon: 'locker', key: true, text: '柜门开着，柜底积了一层灰，中间有一块方形空白——昨天这里还放着一只箱子。柜锁编号登记在"邵平"名下。' },
      k_case: { name: '被打开的行李箱', icon: 'suitcase', key: true, text: '行李箱锁芯周围有一圈细密划痕，是万能钥匙留下的，不是原配钥匙。箱内衬布被割开，夹层里曾经藏过东西——防静电袋的碎片还在。' },
      k_mon: { name: '仓库监控主机', icon: 'monitor', key: false, text: '硬盘昨晚 22:00 被格式化。但主机侧面插着一张没拔的备用缓存卡，里面留着最后三帧：22:04，一只戴手套的手正在关灯。' },
      k_phone: { name: '死者的手机', icon: 'phone', key: true, text: '21:58 他给一个没有存名字的号码发消息：「货在 3 号柜，我拍到了。」附上一段 12 秒的视频。22:11 之后，手机再没有被解锁过。' },
      k_lock: { name: '锁具柜台', icon: 'lock', key: false, text: '柜台上摆着一套万能钥匙，最常用那把的柄部缠着深灰色毛线——和渔网上的纤维是同一种。' },
      k_cable: { name: '地上的电线', icon: 'cable', key: false, text: '一根被剪断的主机电源线，断口平整。剪线的人知道主机在哪，也知道哪一根是电源线。' },
      x_barrel: { name: '油桶', icon: 'barrel', key: false, text: '桶身标签被撕掉一半，剩"…电子级"。地面有一滴已干的冷却液，通向二号集装箱。' },
      k_form: { name: '报关单', icon: 'card', key: false, text: '这份报关单的申报时间是 22:50，而船 22:10 就离港了——货比单据早走了四十分钟。制单员签名：邵平。' }
    },
    questions: [
      {
        q: '死者的第一死亡地点是？',
        sub: '',
        options: [
          { t: '三号泊位的浅滩，落水溺亡', ok: false, r: '尸体位置高于昨夜最高潮位 1.2 米，且肺部没有积水，不是溺亡。' },
          { t: '货运仓库内', ok: true, r: '正确。手腕勒痕、渔网与缆绳上的同源纤维、以及从仓库延伸出的脚印，都指向仓库。' },
          { t: '渔船甲板上', ok: false, r: '甲板无血迹与拖拽痕，且船 22:10 已离港，与死亡时间冲突。' }
        ],
        result: '把尸体拖到海边，是凶手给自己准备的"最自然的解释"。'
      },
      {
        q: '最致命的破绽是什么？',
        sub: '',
        options: [
          { t: '监控被格式化', ok: false, r: '格式化反而说明他有备而来，但主机里还有缓存卡——这算失误，不算决定性破绽。' },
          { t: '尸体位置高于潮位线', ok: true, r: '正确。潮水不会配合任何人。这一条直接推翻了"落水"的全部假设。' },
          { t: '报关单时间晚于开船', ok: false, r: '这能证明走私，但不能证明杀人。' }
        ],
        result: '人可以伪造时间、地点和死因，唯独伪造不了昨夜的潮水。'
      },
      {
        q: '勒死线人并布置现场的人是谁？',
        sub: '',
        options: [
          { t: '船长老K', ok: false, r: '老K 的鞋码与脚印不符，且他离港时死者还在发消息。' },
          { t: '报关员邵平', ok: true, r: '正确。三号储物柜登记在他名下，万能钥匙柄上的毛线与渔网纤维同源，报关单上的签名也是他。' },
          { t: '提货的买家', ok: false, r: '买家当晚没有进入仓库的记录。' }
        ],
        result: '他既给走私货开票，也给走私货善后——直到那个线人把镜头对准了三号柜。'
      }
    ],
    truth: {
      title: '真相：退潮之后',
      text: '21:58，线人把那段 12 秒的视频发了出去，收件人是他唯一没存名字的号码——邵平。\n他在要价。\n22:04，仓库的灯被关掉。邵平用腰间的缆绳从背后勒住了他，全程不到一分钟。\n他剪断主机电源线、格式化硬盘，却不知道侧面还插着一张缓存卡；他拖着尸体走下泊位，把它放进淤泥里，想让涨潮替他解释一切。\n可昨夜是小潮。海水最高时，离那具尸体还有一米二。',
      ending: [
        { type: 'dialog', who: 'shao', mood: 'angry', text: '我一趟报关才拿三百块。他们一柜子赚三百万，凭什么我要替他们坐牢？' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '所以你先替他们杀了人。' },
        { type: 'narration', text: '二号集装箱在公海被查获，里面是四万片芯片。\n邵平被带走那天，潮水正好退到最低。' }
      ]
    }
  }
,

  /* ==================== CASE 05 ==================== */
  {
    id: 'c5', no: 'CASE 05', name: '第七排', sub: '灯灭的三十秒',
    theme: 'theater', difficulty: 3,
    cover: ['seat', 'knife', 'ticket', 'mic'],
    desc: '话剧《长夜》演到第二幕，导演死在观众席第七排——演出没有中断，观众没有察觉。',
    cast: {
      gu: { name: '顾青', role: '替补演员', face: { hairStyle: 'short', hair: '#1f1a16', cloth: '#3a3444', acc: 'none', mood: 'calm' } },
      tuan: { name: '白姐', role: '剧团经理', face: { hairStyle: 'bun', hair: '#4a2f22', cloth: '#6a3a52', acc: 'earring', skin: '#f3d3b0', mood: 'sad' } },
      wu: { name: '老吴', role: '道具师', face: { hairStyle: 'bald', hair: '#7a7a7a', cloth: '#4a4a3a', acc: 'glasses', mood: 'fear' } }
    },
    intro: [
      { type: 'narration', text: '第二幕换景时，全场灯灭了整整三十秒。\n灯再亮起，导演陆明远已经坐在第七排，不再说话了。' },
      { type: 'dialog', who: 'wu', mood: 'fear', text: '道具刀我每天都点数，一把不多一把不少……可那把刀，它不是我准备的那一把。' }
    ],
    scenes: [
      {
        id: 's1', name: '后台与舞台', theme: 'theater', fx: 'beam', floorY: 430,
        props: [
          { id: 'p1', t: 'curtain', x: 40, y: 30, s: 2.3, clue: 'x_curtain' },
          { id: 'p2', t: 'spotlight', x: 290, y: 40, s: 0.95, clue: 'k_light' },
          { id: 'p3', t: 'mic', x: 420, y: 290, s: 0.95, clue: 'k_mic' },
          { id: 'p4', t: 'piano', x: 170, y: 320, s: 1.35, clue: 'x_piano' },
          { id: 'p5', t: 'knife', x: 450, y: 420, s: 0.75, clue: 'k_knife' },
          { id: 'p6', t: 'box', x: 50, y: 380, s: 0.95, clue: 'k_box' },
          { id: 'p7', t: 'lock', x: 250, y: 200, s: 0.6, clue: 'k_key' }
        ]
      },
      {
        id: 's2', name: '化妆间', theme: 'theater', floorY: 420,
        props: [
          { id: 'q1', t: 'mirror', x: 190, y: 50, s: 1.65, clue: 'k_mirror' },
          { id: 'q2', t: 'mask', x: 50, y: 300, s: 0.85, clue: 'x_mask' },
          { id: 'q3', t: 'letter', x: 290, y: 320, s: 0.72, clue: 'k_letter' },
          { id: 'q4', t: 'bag', x: 410, y: 350, s: 1.05, clue: 'k_bag' },
          { id: 'q5', t: 'cigarette', x: 170, y: 460, s: 0.8, clue: 'k_cig' },
          { id: 'q6', t: 'ticket', x: 340, y: 500, s: 0.8, clue: 'x_ticket' }
        ]
      },
      {
        id: 's3', name: '观众席第七排', theme: 'theater', floorY: 400,
        props: [
          { id: 'r1', t: 'seat', x: 30, y: 170, s: 1.55, clue: 'x_seat' },
          { id: 'r2', t: 'seat', x: 210, y: 190, s: 1.45, clue: 'k_seat' },
          { id: 'r3', t: 'body', x: 265, y: 370, s: 1.6, clue: 'k_body' },
          { id: 'r4', t: 'ticket', x: 110, y: 500, s: 0.75, clue: 'k_ticket' },
          { id: 'r5', t: 'phone', x: 420, y: 450, s: 0.75, clue: 'k_phone' },
          { id: 'r6', t: 'bloodstain', x: 300, y: 545, s: 0.72, clue: 'x_blood' }
        ]
      }
    ],
    clues: {
      x_curtain: { name: '幕布导轨', icon: 'curtain', key: false, text: '第二幕的幕布由后台手动拉动。导轨上的定位夹被挪动了半格——换景时，幕布会比平时多遮住第七排一秒。' },
      k_light: { name: '追光记录', icon: 'spotlight', key: true, text: '控台记录显示，20:14:06 全场灯灭，20:14:36 灯亮。整整三十秒，比彩排时长了 12 秒——有人手动延长了换景。', quote: '三十秒，足够从后台走到第七排。' },
      k_mic: { name: '舞台拾音', icon: 'mic', key: false, text: '主麦一直开着。灯灭的十秒后，音轨里出现了第二个人的呼吸声，急促，从左后方靠近。第二十二秒，一声很短的布料摩擦。然后，什么都没有了。' },
      x_piano: { name: '舞台钢琴', icon: 'piano', key: false, text: '琴盖上放着当晚的节目单。替补演员一栏，用铅笔写着"顾青"，又被擦掉了。' },
      k_knife: { name: '道具刀', icon: 'knife', key: true, text: '刀架上有两把外形一样的刀。一把是橡胶道具（刀刃发白、有编号）；另一把刀刃泛蓝、编号被锉掉，刃口有新洗过的水痕——水痕里还挂着一点暗红。' },
      k_box: { name: '道具箱', icon: 'box', key: true, text: '道具箱上的挂锁是开着的，锁梁没有任何撬痕。这把锁只有两把钥匙，道具师一把，副导演一把——而今晚，副导演是顾青。', quote: '不需要撬门的人，才有机会换刀。' },
      k_key: { name: '后台钥匙串', icon: 'lock', key: false, text: '钥匙串挂在控台旁，取用登记本上最后一次签名是 19:50，签的是"陆"（导演本人）。而导演 19:50 正在前厅接待赞助人。' },
      k_mirror: { name: '化妆镜上的字', icon: 'mirror', key: false, text: '镜面上用口红写着一行字：「五年了，你还要我等到什么时候。」字迹属于某支正红色口红，和卡座案里那只杯子上的是同一色号——巧合得有点刻意。' },
      x_mask: { name: '面具架', icon: 'mask', key: false, text: '《长夜》里"影子"的面具有两个。第二个的面罩内侧被人贴了黑色绒布——戴上后，从观众席看不出是谁。' },
      k_letter: { name: '未送出的辞呈', icon: 'letter', key: false, text: '一封写好没交的辞呈：「我不想在三十岁还做别人的影子。」落款顾青，日期是三天前。旁边压着一张换角通知：第七排那场戏的主演，换成了别人。' },
      k_bag: { name: '顾青的背包', icon: 'bag', key: false, text: '包里有一件深红外套，袖口沾着一点剧场用的黑绒纤维。外套口袋里是一盒只抽了两根的烟。' },
      k_cig: { name: '后台的烟头', icon: 'cigarette', key: true, text: '后台严禁吸烟，但消防通道的沙盘里有两个烟头，同一个牌子。这个牌子全市只有三家店卖，剧团里抽它的只有两个人——其中一个今晚在台上。' },
      x_ticket: { name: '工作票', icon: 'ticket', key: false, text: '一张没撕副券的工作票，座位是"五排 3 号"，被划掉改成了"七排 3 号"。改字的笔，和控台登记本上那支是同一支。' },
      x_seat: { name: '第六排座椅', icon: 'seat', key: false, text: '第六排的座椅蒙面上有一道新鲜的刮痕，像是有人从后面翻过来时被鞋尖蹭到的。' },
      k_seat: { name: '第七排座椅', icon: 'seat', key: false, text: '椅背前倾的角度不对——有人从后排翻过来时压过它。椅背下方的地毯上有一处被反复踩踏的凹陷，尺寸 42 码。' },
      k_body: { name: '死者', icon: 'body', key: false, text: '陆明远坐在七排 3 号，伤口在左侧肋下，一刀。血几乎全被外套吸住，所以灯亮时没人看见。他手里攥着半张票根——是"五排 3 号"的那一半。' },
      k_ticket: { name: '被换过的票根', icon: 'ticket', key: true, text: '票根上"五排"被整齐裁掉，只留"3 号"。票务系统日志显示，这张票在 19:40 被改过一次，操作账号是后台副导演账号。' },
      k_phone: { name: '死者的手机', icon: 'phone', key: true, text: '19:38 收到一条匿名短信：「第二幕有东西给你看，坐七排 3 号。」20:14 后没有任何操作。他到死都以为那是一条关于戏的短信。' },
      x_blood: { name: '地毯上的血', icon: 'bloodstain', key: false, text: '血迹集中在座椅正下方，没有喷溅。刀是贴着身体刺进去的——凶手站在他身后。' }
    },
    questions: [
      {
        q: '作案发生在哪一段时间？',
        sub: '',
        options: [
          { t: '演出开始前，在化妆间', ok: false, r: '化妆间没有血迹，死者 19:50 后一直在前厅。' },
          { t: '20:14 灯灭的三十秒内', ok: true, r: '正确。控台记录显示换景被延长了 12 秒，拾音里也有第二个人的呼吸与布料摩擦声。' },
          { t: '散场之后，观众离席时', ok: false, r: '演出结束后全场灯亮，第七排一直有人，没有作案条件。' }
        ],
        result: '一千个观众同时看向舞台的三十秒，是这座剧院里最私密的时间。'
      },
      {
        q: '真刀是怎么进入道具箱的？',
        sub: '',
        options: [
          { t: '凶手撬开了挂锁', ok: false, r: '锁梁没有任何撬痕，是正常开启的。' },
          { t: '凶手持有副导演的钥匙', ok: true, r: '正确。道具箱锁只有道具师和副导演有钥匙，而今晚的副导演是顾青。' },
          { t: '真刀本来就混在道具里', ok: false, r: '编号被锉掉、刃口有新洗水痕，说明它是被特意带进来并清洗过的。' }
        ],
        result: '换刀只需要三十秒，前提是你有那把钥匙。'
      },
      {
        q: '杀死导演的是谁？',
        sub: '',
        options: [
          { t: '道具师老吴', ok: false, r: '老吴整场都在侧幕操作幕布，且他的钥匙没有离开过他的腰。' },
          { t: '替补演员顾青', ok: true, r: '正确。票务系统用副导演账号改了座位，烟头品牌只属于他，化妆镜上的五年之怨也指向他。' },
          { t: '剧团经理白姐', ok: false, r: '白姐在演出中一直在前台售票处，有完整监控记录。' }
        ],
        result: '他把导演叫到黑暗里，用本该是道具的那一刀，结束了五年的"影子"生涯。'
      }
    ],
    truth: {
      title: '真相：灯灭的三十秒',
      text: '19:38，顾青用后台账号把陆明远的座位改到七排 3 号，再发了一条匿名短信。\n19:50，他以导演的名义取走钥匙串，把锉掉编号的真刀换进道具箱。\n20:14:06，灯灭。他延长了十二秒的换景，从第六排翻过来，站在自己导演的身后。\n一刀，贴着身体。血被呢子外套吸住了，观众席上没有人回头。\n灯亮时，他已经回到侧幕，戴着那张贴了黑绒的面具。\n他唯一留下的，是消防通道里那两根只抽了两根的烟。',
      ending: [
        { type: 'dialog', who: 'gu', mood: 'sad', text: '他答应过我，这一轮让我上。五年，我替他演了四百场影子。' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '你把那三十秒排练了多少遍？' },
        { type: 'narration', text: '《长夜》后来停演了。\n剧院在第七排的位置钉了一块小铜牌，上面写着：此处曾有观众。' }
      ]
    }
  },

  /* ==================== CASE 06 ==================== */
  {
    id: 'c6', no: 'CASE 06', name: '雾中庄园', sub: '最后一盏灯',
    theme: 'manor', difficulty: 3,
    cover: ['fireplace', 'diary', 'candle', 'clock'],
    desc: '裴敬亭死在自家壁炉旁，看起来像一场安静的心脏病。可这栋房子里，已经有人等了五年。',
    cast: {
      fu: { name: '福伯', role: '管家', face: { hairStyle: 'bald', hair: '#8a8a8a', cloth: '#3a3444', acc: 'collar', mood: 'calm' } },
      lin: { name: '林漾', role: '策展人', face: { hairStyle: 'long', hair: '#3b2b22', cloth: '#6a3a52', acc: 'earring', skin: '#f3d3b0', mood: 'sad' } },
      pei: { name: '裴敬亭', role: '庄园主', face: { hairStyle: 'short', hair: '#6a6a6a', cloth: '#2f3a4a', acc: 'moustache', mood: 'calm' } }
    },
    intro: [
      { type: 'narration', text: '雾从河面漫上来，把这栋房子裹住。\n裴敬亭靠在壁炉边的扶手椅上，手里握着半杯酒，面容安详得像睡着。' },
      { type: 'dialog', who: 'fu', mood: 'calm', text: '先生心脏不好，每晚都要吃药。那杯酒是我斟的，分量和往常一样。' },
      { type: 'narration', text: '五年了。这座房子里所有人都学会了把话说得很轻。\n包括那个替他斟酒的人。' }
    ],
    scenes: [
      {
        id: 's1', name: '大厅', theme: 'manor', fx: 'fog', floorY: 440,
        props: [
          { id: 'p1', t: 'fireplace', x: 170, y: 170, s: 2.0, clue: 'k_fire' },
          { id: 'p2', t: 'painting', x: 430, y: 80, s: 1.1, clue: 'k_paint' },
          { id: 'p3', t: 'clock', x: 320, y: 96, s: 0.8, clue: 'k_clock' },
          { id: 'p4', t: 'statue', x: 30, y: 320, s: 1.2, clue: 'x_statue' },
          { id: 'p5', t: 'glass', x: 250, y: 470, s: 0.65, clue: 'k_glass' },
          { id: 'p6', t: 'body', x: 130, y: 430, s: 1.7, clue: 'k_body' },
          { id: 'p7', t: 'rug', x: 200, y: 610, s: 1.8, clue: 'x_rug' }
        ]
      },
      {
        id: 's2', name: '书房', theme: 'manor', floorY: 430,
        props: [
          { id: 'q1', t: 'desk', x: 190, y: 390, s: 1.5, clue: 'x_desk' },
          { id: 'q2', t: 'diary', x: 270, y: 372, s: 0.65, clue: 'k_diary' },
          { id: 'q3', t: 'safe', x: 420, y: 140, s: 0.9, clue: 'k_safe' },
          { id: 'q4', t: 'phone', x: 355, y: 398, s: 0.6, clue: 'k_phone' },
          { id: 'q5', t: 'book', x: 70, y: 460, s: 0.75, clue: 'k_book' },
          { id: 'q6', t: 'bookshelf', x: 20, y: 80, s: 1.45, clue: 'x_shelf' },
          { id: 'q7', t: 'letter', x: 170, y: 560, s: 0.7, clue: 'k_letter' }
        ]
      },
      {
        id: 's3', name: '地下室', theme: 'manor', fx: 'dust', floorY: 460,
        props: [
          { id: 'r1', t: 'candle', x: 190, y: 400, s: 0.85, clue: 'k_candle' },
          { id: 'r2', t: 'crate', x: 370, y: 340, s: 1.05, clue: 'k_crate' },
          { id: 'r3', t: 'wallstain', x: 200, y: 80, s: 1.15, clue: 'k_wall' },
          { id: 'r4', t: 'footprint', x: 110, y: 570, s: 0.75, clue: 'k_foot' },
          { id: 'r5', t: 'barrel', x: 30, y: 330, s: 1.1, clue: 'x_barrel' },
          { id: 'r6', t: 'rope', x: 290, y: 430, s: 0.8, clue: 'k_rope' },
          { id: 'r7', t: 'lock', x: 470, y: 470, s: 0.65, clue: 'x_lock' }
        ]
      }
    ],
    clues: {
      k_fire: { name: '壁炉里的灰', icon: 'fireplace', key: false, text: '壁炉里有一片没烧尽的信封边角，收件人地址还认得出：「……照 收」。灰堆里还有一枚没熔化的金属扣——旧式鉴定师放大镜上的挂扣。', quote: '烧掉的东西，往往最想被记住。' },
      k_paint: { name: '墙上的画', icon: 'painting', key: false, text: '《夜莺》。画布右下角有极淡的一行签名，被后来涂上的清漆盖住了。用侧光看，那是"赵照"两个字——这幅画原本属于五年前那位鉴定师。' },
      k_clock: { name: '大厅座钟', icon: 'clock', key: false, text: '座钟走时准确。钟摆下方压着一张折叠的纸，是五年前一场拍卖会的入场券存根，编号 017。' },
      x_statue: { name: '石雕', icon: 'statue', key: false, text: '雕像的底座背面刻着一个日期，是五年前的春天。刻痕很深，像是刻了很多遍。' },
      k_glass: { name: '半杯酒', icon: 'glass', key: true, text: '酒液里溶解了过量的洋地黄——和裴敬亭每天服用的强心剂是同一种成分。量是他平时一次剂量的六倍，够让一颗虚弱的心脏安静地停下。', quote: '最好的毒，是病人自己的药。' },
      k_body: { name: '死者', icon: 'body', key: false, text: '裴敬亭坐在壁炉边，姿势自然，没有挣扎。右手握着酒杯，左手却摊开在地上——手里原本有东西，被拿走了。地毯上留着一小块方形压痕。' },
      x_rug: { name: '地毯', icon: 'rug', key: false, text: '地毯靠壁炉的一侧被烧焦了一小块，是最近的事，不是旧的。' },
      x_desk: { name: '书桌', icon: 'desk', key: false, text: '桌上有两副眼镜，度数不同。其中一副是老花镜，属于这座房子里另一个人——它被特意摆在最顺手的位置。' },
      k_diary: { name: '裴敬亭的日记', icon: 'diary', key: true, text: '最后一页写着：「五年前那批东西，是我做的局。赵照替我背了，我睡不着。明天我会去自首，把《夜莺》还给他的女儿。」日期是昨天。', quote: '他想赎罪，但有人不想让他等到明天。' },
      k_safe: { name: '保险箱', icon: 'safe', key: true, text: '箱里是一枚旧的鉴定专用钢印、一张三人合影（裴敬亭、赵照、还有一个年轻人），以及一份五年前的拍卖成交确认书。合影背面写着：「照、亭、福，于春分。」' },
      k_phone: { name: '书房的座机', icon: 'phone', key: false, text: '通话记录显示，昨天下午 15:20 打出过一通电话，号码属于市博物馆的文物科。同日 15:40，庄园的用登记本上，管家外出了一趟。' },
      k_book: { name: '账本', icon: 'book', key: false, text: '账本最后一笔是给"福"的汇款，五年来每月一次，金额不大，从未间断。像是封口费，也像是一个老人每月给自己的提醒。' },
      x_shelf: { name: '书柜', icon: 'bookshelf', key: false, text: '最下层压着一批旧报纸，全是五年前的，标题都和同一场拍卖有关。有人一直没舍得扔。' },
      k_letter: { name: '未寄出的信', icon: 'letter', key: true, text: '信写给林漾：「你父亲不是骗子。画在裴家，我替你取回来。」落款只有一字：福。信没寄出——因为收信人已经在三天前，因为偷画被捕了。' },
      k_candle: { name: '两根蜡烛', icon: 'candle', key: true, text: '地下室桌上是两根蜡烛，一根烧剩三分之一，一根只烧了个头。同一天点过两次，第二次来的人待了很久，走的时候把烛芯掐灭了——老人才有的习惯。' },
      k_crate: { name: '木箱里的旧物', icon: 'crate', key: false, text: '箱子里是一整套鉴定工具：放大镜、钢印、鹿皮手套，还有一件洗得发白的鉴定师外套。领口内侧绣着"赵照"。这套工具不该在裴家。' },
      k_wall: { name: '墙上的刻痕', icon: 'wallstain', key: true, text: '地下室的墙上有几十道刻痕，是计数用的。最后一道下面刻着两个字：「够了」。刻痕的位置高度一致——同一个人，五年里每个月下来一次。' },
      k_foot: { name: '地上的脚印', icon: 'footprint', key: false, text: '两种脚印：一种是 41 码皮鞋，属于裴敬亭；另一种是 42 码胶底鞋，鞋跟外侧磨损严重——长期在厨房与楼梯间走动的人才会这样。' },
      x_barrel: { name: '酒桶', icon: 'barrel', key: false, text: '桶里剩的酒和杯中残液一致，说明酒是从这里取的，不是自带的。' },
      k_rope: { name: '楼梯口的绳', icon: 'rope', key: false, text: '绳子用来吊运重物。绳结打法是老式货运结——码头的人才这么打。' },
      x_lock: { name: '地下室的锁', icon: 'lock', key: false, text: '锁是新的，但锁鼻是旧的。换锁的人不想让旧的钥匙还能开门，却忘了换锁鼻。' }
    },
    questions: [
      {
        q: '裴敬亭的真正死因是？',
        sub: '',
        options: [
          { t: '壁炉导致的一氧化碳中毒', ok: false, r: '室内通风良好，血液检测没有碳氧血红蛋白升高。' },
          { t: '酒中过量的强心剂（洋地黄）', ok: true, r: '正确。酒液中的洋地黄浓度是他日常剂量的六倍，足以诱发致命性心律失常。' },
          { t: '突发心肌梗塞', ok: false, r: '心肌并无急性梗死的病理改变，是药物过量引发的心律失常。' }
        ],
        result: '一个每天需要吃药的老人，最安全的地方，恰恰是那只药瓶。'
      },
      {
        q: '凶手为什么要在昨天动手？',
        sub: '',
        options: [
          { t: '因为管家当天要离开庄园', ok: false, r: '外出记录只是他去做准备，不构成时间点上的理由。' },
          { t: '因为裴敬亭第二天要去自首，承认五年前的骗局', ok: true, r: '正确。日记写明他要在次日去博物馆自首并归还《夜莺》，这会让凶手五年的等待落空。' },
          { t: '因为林漾被捕的消息传到了庄园', ok: false, r: '林漾三天前就被捕了，若这是动机，动手时间不该拖到昨天。' }
        ],
        result: '他等了五年，等的不是复仇的机会，是对方低头的一天。可对方选择了别的路。'
      },
      {
        q: '在酒里下药的人是谁？',
        sub: '',
        options: [
          { t: '管家福伯', ok: true, r: '正确。每月汇款、地下室计数刻痕、鉴定工具、写给林漾的信，还有那双 42 码胶底鞋——他在这里等了五年。' },
          { t: '策展人林漾', ok: false, r: '林漾三天前已被羁押，没有进入庄园的可能。' },
          { t: '裴敬亭自己', ok: false, r: '日记里他已决定自首并归还画作，没有自我了断的理由。' }
        ],
        result: '他不是这家的管家。他是另一个人的旧友，在这栋房子里，做了五年自己的卧底。'
      }
    ],
    truth: {
      title: '真相：最后一盏灯',
      text: '五年前那场春分拍卖，裴敬亭做了局，让鉴定师赵照替他背下全部罪名。赵照在第二个冬天结束了自己的生命，留下一个女儿。\n福伯是赵照的师父。他改名换姓进了裴家，从厨房做到管家，用了五年。\n他在地下室放了一套旧工具，墙上每个月刻一道痕，等着裴敬亭说出那句"是我做的"。\n昨天，裴敬亭终于写下了那句话——可他写的是"我去自首"。\n自首意味着赵照的名字会被洗净，也意味着福伯五年的恨，将无处安放。\n于是他在那杯酒里，倒进了六倍的药。\n他什么都没带走，只在壁炉里烧掉了半封信。',
      ending: [
        { type: 'dialog', who: 'fu', mood: 'calm', text: '我想听他亲口说一句"我害了他"。只要一句。他偏要去自首，好像这样就能一笔勾销。' },
        { type: 'dialog', who: 'DET', mood: 'calm', text: '你替你徒弟守了五年。现在，他的名字可以洗干净了——只是代价是你自己。' },
        { type: 'narration', text: '《夜莺》归还给了林漾。画角那行签名，终于见了光。\n雾散的那天早上，庄园的灯全灭了。\n只有地下室那两根蜡烛，还立在原处——一根长，一根短。' }
      ]
    }
  }
];

const RANKS = [
  { min: 92, rk: 'S', label: '明察秋毫' },
  { min: 78, rk: 'A', label: '目光如炬' },
  { min: 60, rk: 'B', label: '略有疏漏' },
  { min: 0, rk: 'C', label: '还需磨练' }
];
