const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Colombo").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga", 
    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
    "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
            "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ",
            "Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
 "Ha chad jao india gate p", "bhgwan k nam p raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krvao apna 😏", "Tum vhi ho na jo jamin se 1 rupya v utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao kbhi delhi fir milke party krte h ", "ooo bot k  chamcheee sant ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
            "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi himachal tumko thnd m jmate h 😁😹", "apna sasta internet pack htake achha sa dalwao pehle", 
            
                " मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌",   " मासूम सी दिखेगी बवाल कर जायेगी इसकी क्या जरूरत थी कह कह के कंगाल कर जायेगी।😝",   "वो आई थी मेरे कब्र पर दिया जलाने के लिए रखा हुआ फूल भी ले गई दूसरे वाले को पटाने के लिए ",   "रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝 ",   " चाईनीज मोहब्ब्त थी साहब टूट कर बिखर गई पर दिल हिन्दुस्तानी था एक और पटा ली.😁",   "सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है। ",   "कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है ",   "ये जो तुम लोग बिना बॉयफ्रेंड वाली लड़की ढूंढ रहे हो ना.. शास्त्रों में इसे पत्थर में से तेल निकालना कहा गया है😁 ",   " काली काली साड़ी में कढ़ाई नही होती जान तुम्हारी याद में पढ़ाई नही होती 🙈",   "छोटी छोटी बातों में खुशियां तलाश लेता हूं, सायकिल पर चलता हूं फिर भी फोन को फ्लाइट मोड पर डाल लेता हूं🤣 ",   "क्रश हो या ब्रश वक्त पर बदल लेना चाहिए वरना दिल हो या दांत टूट ही जाएगा..🤪 ",   " इश्क़ होने लगे तो पूजा पाठ किया करो दोस्तों मोहब्ब्त होगी तो मिल जाएगी बला होगी तो टल जायेगी😝",   "मां: तुझे कैसी बीवी चाहिए बेटा.?? मै: तुम्हारे जैसी लाड और प्यार करनेवाली 🙈 ां : क्या बात है बेटा पूरी जिंदगी चप्पल खाकर ही काटनी है क्या😂😂 ",   "गुस्से में उसी का नंबर डिलीट करना चाहिए जिसका नंबर याद हो वरना बाद में बहुत तकलीफ होती है ",   "दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂 ",   "टंकी में टंकी, टंकी में पानी बाबू शोना के चक्कर में don’t waste your Jawaani😁 ",   "She – मेरे घरवाले सरकारी नौकरी के बिना नहीं मानेंगे Me: अरे अगर लग गई ना तो मेरे घरवाले नही मानेंगे ",   "सच्चा दोस्त 2 ही बाते बताता है अंडा nonveg नही होता और बीयर दारू नही होती.! ",   " Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu Shadi-shuda Aurto Ka. ",  
            
            
            
            
            
            
            
            
            
            
     "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" , "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍",       
            
            "hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi", "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂" , "are tum vhi ho na jisko m nahi janta 😂" , "kal haweli p mil jra bataunga  😂" , "ese na likho pyar ho jaega 😂" , "Sukr h m andha hu nhi to teri pic dekhni pdti 😂" , "ese hi bot bot likhte rha kro kyuki bot likhne se konsa rumhara bijli ka bill aa jaega😂",       
           
     "So jao sab", "Main ap ke papa ko btadu kya ki tum Facebook p settingbazi krte ho 😂", "#__Lalla__Lalla__Lori #__Koi___Chori__Set__Ni__Hori" ,"Block Your ‘’ bf ‘’ And Purpose me 🙂💔" , "Tum vhi ho na jo ladka ptate ho", "K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night all") || (event.body.toLowerCase() == "good night everyone") || (event.body.toLowerCase() == "gn all")) {
     return api.sendMessage("️❤️ Good Night dear friend 🥰", threadID, messageID);
   };

   
  
  
  
  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "gm all") || (event.body.toLowerCase() == "good morning all") || (event.body.toLowerCase() == "good morning everyone") || (event.body.toLowerCase() == "gm everyone") || (event.body.toLowerCase() == "good morning guys") || (event.body.toLowerCase() == "gm guys") || (event.body.toLowerCase() == "gm all of you")|| (event.body.toLowerCase() == "good morning ❣️")|| (event.body.toLowerCase() == "good morning guysss")|| (event.body.toLowerCase() == "good morning all of you")|| (event.body.toLowerCase() == "g m")|| (event.body.toLowerCase() == "gud morning")) {
     return api.sendMessage("❤️ Good Morning my dear friend 🥰 Have a nice day and Good time", threadID);
   };

  
  // if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
   //  return api.sendMessage("Hello How are you 💖🤍✨", threadID);
  // };

  
   if ((event.body.toLowerCase() == "i am fine") || (event.body.toLowerCase() == "fine")||(event.body.toLowerCase() == "good")) {
     return api.sendMessage("❤️Are bahut bdiya ", threadID);
   };

  
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("Are upar kya dikh rha h hame bhi btao 🙄😈", threadID);
   };

  if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("Ummaaaahhhhh baby 😘", threadID);
   };
  
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")|| (event.body.toLowerCase() == "😂😂😂")|| (event.body.toLowerCase() == "😂😂😂😂")|| (event.body.toLowerCase() == "😂😂😂😂😂")|| (event.body.toLowerCase() == "😂😂😂😂😂😂")|| (event.body.toLowerCase() == "😂😂😂😂😂😂😂")) {
     return api.sendMessage("Full laughingbazi 😁, Ese hi yha has haske time waste krte rho ", threadID);
   };
  
   if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("Full chasmabazi, sambhalke chlna khi gir na jao", threadID);
   };


   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😴")) {
     return api.sendMessage("So jao nind aarhi to", threadID);
   };

   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Full billibazi 😂😁", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "😐")|| (event.body.toLowerCase() == "😑")|| (event.body.toLowerCase() == "😶")|| (event.body.toLowerCase() == "😏")|| (event.body.toLowerCase() == "😣")|| (event.body.toLowerCase() == "😥")) {
     return api.sendMessage("Full emojibazi, Kya hua cutieee 🙄", threadID);
   };


   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("Rotdu dost, ro kyu rhe ho 😐", threadID);
   };


   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Full 32cbazi, Gir na jaye dant 😛😜", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("Full lovebazi😏, lgta h pyar ho gya h apko😒", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠")|| (event.body.toLowerCase() == "😠😠")|| (event.body.toLowerCase() == "😤😤")|| (event.body.toLowerCase() == "😡")|| (event.body.toLowerCase() == "😡😡")|| (event.body.toLowerCase() == "😡😡😡")) {
     return api.sendMessage("Full gussabazi 😐, Gussa nhi kro dost Gussa sehat or riste dono k liye hanikarak h 💕💖✔", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Full attitudebazi, Ye nakhre kahin or ja k dikha be😈", threadID);
   };





















   if ((event.body.toLowerCase() == "billi") || (event.body.toLowerCase() == "cat")|| (event.body.toLowerCase() == "bot billi")|| (event.body.toLowerCase() == "tu h billi")|| (event.body.toLowerCase() == "bot cat")|| (event.body.toLowerCase() == "bilota")|| (event.body.toLowerCase() == "cat")|| (event.body.toLowerCase() == "billi bot")) {
     return api.sendMessage("️Kyu billi billi krti h tu billi p kyu mrti h 😁", threadID);
   };

  
  
   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "bot kmina") || (event.body.toLowerCase() == "kmine")|| (event.body.toLowerCase() == "kmina bot")|| (event.body.toLowerCase() == "kmine bot")|| (event.body.toLowerCase() == "kmina h tu")|| (event.body.toLowerCase() == "kmini")|| (event.body.toLowerCase() == "kmina ldka")|| (event.body.toLowerCase() == "bot kmine bhg")|| (event.body.toLowerCase() == "bot kmine hurr")) {
     return api.sendMessage("️Agr hm kmine h to tum to double kamini hui😁😁", threadID);
   };

  
   if ((event.body.toLowerCase() == "nikl sale") || (event.body.toLowerCase() == "nikl")|| (event.body.toLowerCase() == "nikal")|| (event.body.toLowerCase() == "nikal sale")|| (event.body.toLowerCase() == "nikal bsdk")|| (event.body.toLowerCase() == "nikl bsdk")|| (event.body.toLowerCase() == "nikal chutiye")|| (event.body.toLowerCase() == "nikl chutiye")|| (event.body.toLowerCase() == "nikl bc")|| (event.body.toLowerCase() == "nikl sale 😂")|| (event.body.toLowerCase() == "nikl lawde")) {
     return api.sendMessage("️Nhi nakal rha meri mrji 😒", threadID);
   };
  
  
   if ((event.body.toLowerCase() == "bot chutiya") || (event.body.toLowerCase() == "bot gndu")|| (event.body.toLowerCase() == "bot gandu")|| (event.body.toLowerCase() == "bot kuta")|| (event.body.toLowerCase() == "bot kutta")|| (event.body.toLowerCase() == "bot bklol")|| (event.body.toLowerCase() == "bot bakchod")|| (event.body.toLowerCase() == "sasta bot")|| (event.body.toLowerCase() == "bot lodu")|| (event.body.toLowerCase() == "bot bsdk")|| (event.body.toLowerCase() == "bsdk bot")|| (event.body.toLowerCase() == "bot bc")) {
     return api.sendMessage("️Haaaaa \n or tum husnpari ho 😁", threadID);
   };

   
   if ((event.body.toLowerCase() == "htttt") || (event.body.toLowerCase() == "httt")|| (event.body.toLowerCase() == "htt")|| (event.body.toLowerCase() == "ht")|| (event.body.toLowerCase() == "httttt")|| (event.body.toLowerCase() == "htttttt")|| (event.body.toLowerCase() == "hhtt")|| (event.body.toLowerCase() == "httttttt")|| (event.body.toLowerCase() == "hhhttt")) {
     return api.sendMessage("️Tum hato hm kyu hate 😁😁", threadID);
   };

  if ((event.body.toLowerCase() == "bhk") || (event.body.toLowerCase() == "bhkk")|| (event.body.toLowerCase() == "bhkkk")|| (event.body.toLowerCase() == "bhkkkk")|| (event.body.toLowerCase() == "bhkkkkk")|| (event.body.toLowerCase() == "bhkkkkkk")|| (event.body.toLowerCase() == "bhkkk bot")|| (event.body.toLowerCase() == "bhkkkk bot")|| (event.body.toLowerCase() == "bhkkkkk bot")) {
     return api.sendMessage("️Bhkkk bhkkk nhi kro nhi to tumhare kan kha jaunga 😁", threadID);
   };

   if ((event.body.toLowerCase() == "abe jaa na") || (event.body.toLowerCase() == "abe ja na")|| (event.body.toLowerCase() == "abe ja")|| (event.body.toLowerCase() == "abe jaa")|| (event.body.toLowerCase() == "abe nikl")|| (event.body.toLowerCase() == "abe bhag")|| (event.body.toLowerCase() == "bhag ja")|| (event.body.toLowerCase() == "bhgja")|| (event.body.toLowerCase() == "bhggg")) {
     return api.sendMessage("️Kha jau btao, bhej rhe ho to ticket to tum krvao kanjus 😹", threadID);
   };


   if ((event.body.toLowerCase() == "sorry") || (event.body.toLowerCase() == "sorry.")|| (event.body.toLowerCase() == "sorry..")|| (event.body.toLowerCase() == "sorry...")|| (event.body.toLowerCase() == "sry")|| (event.body.toLowerCase() == "sory")|| (event.body.toLowerCase() == "sry all")|| (event.body.toLowerCase() == "sorry everyone")|| (event.body.toLowerCase() == "sorry all")) {
     return api.sendMessage("️Jao Jao maaf kiya mene tumko unki taraf se ✔", threadID);
   };


  if ((event.body.toLowerCase() == "ty") || (event.body.toLowerCase() == "t y")|| (event.body.toLowerCase() == "thanks")|| (event.body.toLowerCase() == "thank you")|| (event.body.toLowerCase() == "tysm")|| (event.body.toLowerCase() == "thankyou")|| (event.body.toLowerCase() == "tq")|| (event.body.toLowerCase() == "tq everyone")|| (event.body.toLowerCase() == "tq all")|| (event.body.toLowerCase() == "thank u")) {
     return api.sendMessage("️Welcome dost, How are you 💖", threadID);
   };

  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

  if ((event.body.toLowerCase() == "😘😘😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Pehle Brush Karke AA. Tere Muh Se Badbu AA Rhi H", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot i m going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("Areh Adi MaNav Zoo se Bahar Kaise Agya Tu. Firse Zoo M Ja. Bahar Kya Kar Rha H", threadID);
  };

if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsim")) {
     return api.sendMessage("Prefix Kya m lgaunga Pehle Prefix Laga Fir Likh Sim", threadID);
   };

    if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud ko KYa LeGend SmJhTi Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")|| (event.body.toLowerCase() == "koi h")|| (event.body.toLowerCase() == "kha gye sab")|| (event.body.toLowerCase() == "kha gye sb")|| (event.body.toLowerCase() == "koi h kya")|| (event.body.toLowerCase() == "is anyone here")|| (event.body.toLowerCase() == "kha gye nikamo")|| (event.body.toLowerCase() == "koi h kya")|| (event.body.toLowerCase() == "sb lge pde h")|| (event.body.toLowerCase() == "sb lge pde h babu sona m")) {
     return api.sendMessage("M Hu Na dear yha❤️", threadID);
   };


  if ((event.body.toLowerCase() == "hemang") || (event.body.toLowerCase() == "hemang sheoran") || (event.body.toLowerCase() == "jiju") || (event.body.toLowerCase() == "@hemang sheoran")) {
     return api.sendMessage( "Online hoga to reply krdega nhi kiya to smjho busy h work m",threadID);

       
   };

 if ((event.body.toLowerCase() == "ghnta") || (event.body.toLowerCase() == "ghnta bc") || (event.body.toLowerCase() == "gnta") || (event.body.toLowerCase() == "gnta bc")) {
     return api.sendMessage( "Kya hota h ye ghnta vnta hme bhi btao 😁😁😂",threadID);

       
   };



  
 if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Hemang. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/hemang.sheoran.16", threadID);
   };

  
   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")|| (event.body.toLowerCase() == "admin kon h bot ka")) {
     return api.sendMessage("He is Hemang Sheoran.", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

 if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "sant hoja") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "by")) {
     return api.sendMessage("Bye jane wale ko kon rok skta h 😭😷 ❤️ ", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }