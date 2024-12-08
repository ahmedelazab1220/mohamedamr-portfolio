'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "4f31df8a9b979e49f352b36dd9092350",
".git/COMMIT_EDITMSG": "ec029fba479d6c1208eea98dbc24b256",
".git/config": "ef3cdf1c38df69c7441f07759264aab6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "232158b910487af105f3fd599888c332",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e9c644addf4b86b139b40e8429ef12e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d55eb81c57cac658495abeab75aa3de",
".git/logs/refs/heads/main": "3b66090b16080bcd695e38de8db8dbd7",
".git/logs/refs/remotes/origin/main": "9718efcbc6bc0a9d17872b92c7b2d445",
".git/MERGE_HEAD": "2529a8657385bc5e84432a90d48f3895",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "7586f48e2e8d704fa0ff4714964d15ad",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/555dd66ab58af0de31f14717fcfe128231effe": "dcbbcdfe02cb4ea3e54e6ef850059d67",
".git/objects/06/7f897a3e2ac054b02dd54ffc18d718e77d289b": "f18eee6253c056944fbcb793d657c1c9",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/6304dc64285f6e1c29b291a9997dabe5b9ab23": "976492c6c399252b36de6c28361dd667",
".git/objects/09/bae83f8c55809dca37acebee3c886fa4011ebb": "a337158bc0524ea242cafd8c2ec4c61d",
".git/objects/0e/92ab394a4e93b58f8668c7ab6d1282fd3f6f8d": "9f5f7f476db843d3d5643e4bb314cfb6",
".git/objects/1d/eedb665a82718951e3d50f3cf354a38ac63804": "cdace49419f90236a60bc7b1154efe2f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/99e70312888645de96036d09fc0ec54a3a4206": "d287d841767034e528e2e35a03cc2c1c",
".git/objects/27/a7b1e73cab91863667265b05f37ecd64c23fad": "1a082c1e4e4e9036916f640f3056d18c",
".git/objects/2b/709341681b11c75a46cdcd52b04ba201707819": "3225bccdf38a148697df01a161772f62",
".git/objects/2c/4989c3a437fe03cd85b7ce058f8162eb53ceb3": "0bc9bb11b4d25f417f8d5125b8b28763",
".git/objects/30/2b8991135041237465b23801c0997308c2bec6": "fb3f91fa9b5ad19d079e0424627e0f1a",
".git/objects/30/a8f3e5988ab25fd2b54fd2665cf4c07a193ee2": "f7d68ffcaeadfd769764e2389addc947",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/05dde3d2b18e456f7647dce4dfcacddfa6975e": "f7f1710536221fbfcf40eb3f8883fec9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/36/8bf1724740a8dde6d4b4a466d48f20f783a8c9": "13ce332db39e66e8f4f69e2c222f3e75",
".git/objects/39/2628fbd45b91409befd86cef5d33604ebb17a3": "4b15fb93ab282626f477d7f658b4620c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/dc8094d06118c55565334dd1aef4be4d717bce": "522cf61324c9d9cdd3cc96672800f18e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/ec0667daa112f1e3e7651a3f78d738d7c4f3c3": "7adb66c89e3280cab009c3cd81216f7a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/be697de8bb8dee851bb536892551bcadabec57": "8adfb081d105d46257989ad8a1c7a70c",
".git/objects/49/d0afb8d0b378bfdceb9fa1bafba389a2519946": "7a56d6eb3c61c778d964ca9633a97c80",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/3dc8a3b3021687929cd02d9a9d85b3c22536c4": "07b83815b2d443700ac07f4ca5783893",
".git/objects/4b/d58f7e5e6d82943af6bba6632f3ae0a513375f": "01be32e27fdb920a0343970c577f0601",
".git/objects/52/00ed0cfed624b0da312558900e75a991a2910b": "83eedda6b707ef990fa359c923dc1368",
".git/objects/53/49df6d56f97111de0caa91496db964367a2bb5": "152b8fc556f8c511ef67ac633812a1f6",
".git/objects/57/53d8dcd7cd2dffdd81442d56af0e9208e6ad8f": "d5bb43347b809ce3eff08ae9cf53f0c1",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/18759564525b7dbe36744883e359d7807ee2a3": "757a09deff1c53908aec69b5d8c8f57c",
".git/objects/5a/410a49a8a856e257d072b7061e64535e976f2a": "dcf9b96a824efbd463a9c04641ef9928",
".git/objects/5b/5ebf704e610d4b81bc27b438f7a232afeb9c2b": "3f0174f460cffc6b7ed9933d086725ae",
".git/objects/60/f1d7ba47378f15b409a1d86bdc3da853987523": "403df7a1ee019938972a365f30f62410",
".git/objects/63/a63d81215a39b66e1775f7345c9e800036e3e5": "fdecec3493b154c1efb95e374d2adbfc",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/69/70844f595a8641b2f2f586e293da344cc35706": "12ccfd8efffcf4eed4f82184ff347e9a",
".git/objects/6a/513dbe25d028926cad14b9d9e28be200aa1aba": "cccb4f5da8dd28b42615ac6e597072fa",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/6ea1f3ed7f7debbd068b334421b52d73c6ea11": "a21c18f0ab37724edcb084ff425e4769",
".git/objects/77/7f66a360411f5e49dad5bc975d4f6c9c3d9a2f": "7fccdff9c674746801e2078bc495e78a",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/deb2b2c239c06f197a2bed9b996644f6d7d999": "8b9370b83d73dfadc605635b7c244753",
".git/objects/82/52f47b1451f47e35266ba529b1bd3eb0495668": "1320707ded2d6c7b477866a7333a86ec",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/ab6ee3f7aeb137a618c4f6b77e00e55e351b76": "433a1e068e163358f753bd064e32a363",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/af902c8bc44f6a204862e34a9efdd1f1224b83": "472733dcce8b98dbb061b98aba696857",
".git/objects/97/a49a0cfb6f4f5ec62b7a9a277fe852b1325130": "88e61c635d51c3f949d089279682b41d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/9bca718023bec032e35b4b321a227b853b5669": "9bf98fe0a613654123d9ed4206842408",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9d/ed6ef33cbf96cbbf2e4a1ae3bf14d4e253c99b": "bffb568f60fde596ea680e20fc073525",
".git/objects/a1/030ffa6b703f305584003aa7f29314feb72dfb": "48e758c96a90e7af4d842b02cb7f2c0c",
".git/objects/a1/2d4aba91e1c1b7e0c19347fc7f98ce9ee83290": "046d7a4979b83c0dbf39dc4281ab306e",
".git/objects/a4/c52fe8a9c8fbb76b6d56ece1e3d226edf70866": "33bdf460510f7de0c49ca9ec431bbe4e",
".git/objects/a7/25a33195fce6db48e875a49c322ca4d72e42cd": "d158d3f43247c70f8cf4cc2a6c72270e",
".git/objects/a9/c55889fa684c6da28a4d06b63743e31a3779c5": "3f621ad718ecbbc8de77e98e479b58fb",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b30263ba18f9cd1a34df2f94645d1dfe5bf4c0": "2c241e790e12cc527be5748e8046692a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bc/90caa97382e3faf994afcd708aac4ea4418c93": "dabfee8081b1b5f7fc9a7e4746015748",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c9/7bfabd22ef90a4e4637f045a5fe16644f7cecc": "9f18603ecda7a3ec73f5636e0376347a",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/e2d0f051140d1c83a6673a1d06b5f3b5fb0a3a": "d628f259158df970e7bcd9eab49b0a1a",
".git/objects/d0/18995666407ef48aaa0ccf42e4d698989c29e8": "5811bde593d5e55188b29364c58ab6ed",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e7a69d7acf669000261f9a04e14ce446ec94a8": "c3c2ae08973beee9c2098c603ed2c717",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dd/036c2fb9cddbc5d2e1bfaf2bc7caf0598057d1": "38b895100e3a643760791f54dd96c928",
".git/objects/dd/96140f443adb2be58d9620709df6a9d26069aa": "cd9808fb79b53e39ff51b37c6398a556",
".git/objects/de/d9dfdb4389122aaa8a4c96f7ba90d737d9fc03": "d603b774184fd046d7c08f872c1609ed",
".git/objects/e1/710f937300150c30183847749892f2872757da": "ebaf1061b6f1e84196103787f262e9d9",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e5/c891795068692e6447b75ac11b3027ffe362f0": "777e829b0aed029323c2b408ecbe7647",
".git/objects/e6/2e1926831965eb2ada068b3c9c0085bea97e4b": "d573a7c097b91132764cc6496ad71c92",
".git/objects/e9/4848c6ffcff22a7c4c4e0c941101ccfa3f5487": "1fb1e9688d6329a0ac8cb25ea7fc288b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/aae2c4ca41d6b81b60821fd1c17d59e5309c74": "09b886f6cc111a05297ccf044fb436a7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/539fd179ef285e7f80e0ea1751558f08b1a94e": "469f7029f454347e2f4405efb830ff9b",
".git/ORIG_HEAD": "24094880c1d00668536162884727e50f",
".git/refs/heads/main": "24094880c1d00668536162884727e50f",
".git/refs/remotes/origin/main": "2529a8657385bc5e84432a90d48f3895",
"assets/AssetManifest.bin": "a1bd9d162076a22900ddfefdde254336",
"assets/AssetManifest.bin.json": "31ca0891a44968d5b388308372e77ab8",
"assets/AssetManifest.json": "6388d0b6c1485f9459fb8c6e6e25a8d8",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/cpp.svg": "d9496ae833ab0a61133dac14fcbe7d29",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/email.svg": "13a238cf2b82ebadf4b09d1ed7e8a7a3",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/photo_profile.jpg": "90b4e56da15b163f1b39fbf48f43fcee",
"assets/assets/icons/photo_profile.svg": "d23499471135a548633e124a02241498",
"assets/assets/images/background_dark.png": "f0d5c26bf27351546462dc345b6e2e3f",
"assets/assets/images/background_light.png": "450ab25803d62c15ae678d937a000c1d",
"assets/assets/images/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/images/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/images/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/images/splash.png": "61ef95707bc8e9cfbfbeb2b1cf5708c6",
"assets/assets/images/splash_android_dark.png": "a17c99d57fe935937d7ed9987e9c00aa",
"assets/assets/images/splash_android_light.png": "0a57057c00d93cee029a723a2fe9a409",
"assets/assets/images/splash_image.png": "971a46a9ba209ed5a3c99c6bb12be090",
"assets/assets/images/triangle.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "63958cd25ae8eb88241ed981aa41e6eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1dec37ae6f66ff59b6c6529e15cfbe68",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e7cf3b425af5d75b0de2de5025a92790",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09f763a931e25a86b10ec8dbd404ef78",
"/": "09f763a931e25a86b10ec8dbd404ef78",
"main.dart.js": "1124bfefa99a72fb6ddee96b7f081057",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/dark-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/dark-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/dark-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/dark-background.png": "f0d5c26bf27351546462dc345b6e2e3f",
"splash/img/light-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/light-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/light-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/light-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/light-background.png": "450ab25803d62c15ae678d937a000c1d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
