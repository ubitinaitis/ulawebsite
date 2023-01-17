import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React, { useEffect, useState } from 'react';

const ASCII0 = `　　　　　　　　　　　　　　　　　　　　　　　　　　　／|　　＊
　　　　　　　　　　　　　　　　　　　　　　　　　 ／　｜
　　　　　　☆ 　　　　　　　　　　　　　　　　／　　　|＿＿
　　　　　　　　　　　　　　　　　　　　　　 ／　　　／　　 　|
　　　　　　　　　　　　　　　＊ 　　　　／　　　／　　 　 　|＿＿＿
　　　　　　　　　　　　∩_∩ 　　　 ／　　　／　　　　　／　　　／
　　　　　　　　　　　　(ﾟ∀ﾟ )n　 ／　 　 ／　　　 　 ／　　　／
　　　　　　　　　　　　 o　 ヽ　／　　　／　　　　　／　　　／
　　　　　　∩∩　　　/　 　 ヽ　　∩∩　　　　 ／　　 　／
　　　　＿(*ﾟーﾟ)/)/　　　　　ヽ　(ﾟДﾟ,,∩__／　　　 ／
　　　　＼(ﾉ￣￣￣　　　　　　￣∪￣￣／　　　／　　　　　　　★
　　　　　 ＼　　　　　　　　　　　　　　 ／　　　／
　　　　　　　＼　　　　　　　　　　　 ／　　　／
　　　　　　　／　　　　　　　　　　　 ＼ 　／　　　　　　　☆
　　　　　 ／　　　　　　　　　　　　　　 ＼
　　　　／＿＿＿　 　　　　　　＿＿_＿__＼
　　　　￣　　　　ヽ　　　　 　/
　　　　　　　　　　 ヽ　　 　 /
　　　　　　　　　　　 ヽ　　/　　　　　☆　　　　　★
　　　　　　　　　　　　　ヽ/
`;

const ASCII1 = `　　　　　　　　..◇・。..☆*。
　　　　゜ﾟ･*:..｡.★。◎＠.｡○☆｡..:*･゜
　゜ﾟ･*:..｡.。◯＠☆*･゜★｡｡.:*･☆*･｡..:*･゜
＊｡*..:○★◎:｡☆∂☆▽:｡＠*･★'*･*｡:｡
　　◎＊◇*･｡:◎.｡..★＊★.:☆◇*.:･☆*'
　゜ﾟ･*:..｡.*･＊★☆＿＿☆◎*･｡..:*･゜ ゜
　　　　　　　＼　　　　　 　／　　
　　　　　 　　　＼　　 　／
　　　　　 ∩＿∩＼ ／
　　　　　（　´∀｀）..∞　　
　　　　　/ 　つ つ.△ 　
　　　　o(　　 ﾉ
　　　　　しし'`;

const ASCII2 = `♪　　∩＿∩
　　 （　´∀｀ ）))
　(( (　つ　ヽ、　　　♪　　　　　♪
　　　〉 と/　 )))　　　　　　　　　　　♪
　　（__／^(＿)

　　　　∩,＿∩　♪
　　((　(　　　　)
♪　　 /　　　　)　))　♪　　　　　♪
　((　( 　(　　〈　　　　　　　　　　　　♪
　　　 (＿)^ヽ__）`;

const ASCII3 = `　 　 　 　 　 　　∩＿∩ 　 　
　 　 　 　 　 　 .（*'ω'*）
　 　 　　　　／￣￣￣￣.＼　 　））
　 　 　 　 　|) ○　○　○ （|
　 　 　　　／″　 　　　　　　＼
　 　 　 ／＿＿＿＿＿＿＿＿＼
　（（ 　 ￣ ∪∪ ∪ ∪ ∪∪　￣
　 　 　　　　 /: ￣￣￣￣:＼
　 　 　 　　 /　 　 　　　　　 ＼
　 　 　 　　/　 　 　　　　　 　 ＼
　 　 　 　 /　 　 　　　　　 　 　 ＼
　 　 　 　/　 　 　 ∩ ))　　　　 　＼
　 　　　 /　 　 (( ⊂ 　 |　　　 　　 ＼
　 　　　/　　　 　 　 ﾉ　 |　　　　 　 　＼
　 　　 /　 　 　 　∩∩丿　 　　　　　　＼
　 　　/　　 　Σ(ﾟДﾟ；)⊃　 　　　　　　 ＼
　 　 /　　　 　 　 ∪　 　 ﾊﾆｬーﾝ　 　　　＼

　 　　　　　　　　　∫∬　 　 　 　 　`;

const ASCII4 = `　　　　　　 　　／￣￣￣フ＼　　 　　　　　　　　　　　　＿　　　　　　　ﾉ＾)
　　　　　　　／／￣フ ／　　 ＼　　　　　　　　　　　 .／／＼　 　　　./　/
　　　　　 ／／　 ∠／　 ＿＿＿＼＿＿＿　 ＿＿／／　　　＼　　 /　（＿＿＿
　　　　／／￣￣￣フ ／＿　.／／＿　 ／／＿　 ／　　　　　　＼./　(＿（＿＿）
　　 ／／￣フ ／￣／／／／／／／／／／／／　　　　　　　　　|　 (＿（＿＿）
　／∠＿／.／　.／∠／／／∠／／／∠／／　　　　　　∧ ∧ /)　(＿（＿＿）
∠＿__,,,__／　.∠＿＿／∠＿＿／∠＿＿／　　　　　　　(´ー｀ （ （　(＿（＿__）
＼　　　　＼　＼／￣￣￣フ＼ ＼ ＼＿　＼　 ＿　　　/⌒　｀´　 人＿＿＿ソ
　 ＼　　　　＼　＼フ ／￣＼　＼ .／／＼　 ／／＼ / 人　l　 彡ﾉ　　　　　＼
　　　＼　＿ 　＼／／＿＿＿＼／∠＿ 　／／　　　<　Y ヽ　ヽ　(.　　　　　　 ＼
　　　　／／＼／／／＿　 ／／＿　 ／／／　　　　 人├'"　　　 ヽ￣￣￣￣￣
　　 ／／　 ／／.／／／／／／／／∠／　　　　　 ヽ-i ヽ＿＿　　ヽ
　／∠＿／／.／∠／／／∠／／　.＼＼　　　　　　　'ﾘﾉ ヽ　|＼　　ヽ
∠＿__＿／.∠＿＿／∠＿＿／∠フ＼.＼＼　　　　　 ｃ;_,;....ﾉ　ヾﾉヽ__ﾉ`;

const ASCII5 = `　　　　　　　　　　　　　　　　　　　　 , ⌒ヽ
　　　　　　　　　　　　　　　　　　　 （　　 ､
　　　　　　　　　　　　　　　 　 ,-‐､　(_,,　ｒ'
　　　　　　　　　　　　　　　　（　　）　　 ｌ ｌ
　　　　　　　　　　　　　　　 　 ｀ヽｌ　　　ﾚ
　　　　　　　　　　　　　　　　　　　ﾞ ,,､　　　　　 .,,､
　　　　　　　　　　　　　　　　　　　 i ﾐ｀ヾ""´´'´ ｼ.i
　　　　　　　　　？　　　　　　　　　〉　､　　 , '　　 ヽ
　,,,､､　　,,､､,,､　　　　　　　　　　 /　　о　　о　　 ヽ
　　　　　　　　｀゛ゝ　　　　　　　 彡　〃　'ヽ 〃〃　　ﾐ
::::::.　　 /　　　　 ﾞヽ　　　　　　　ﾉｌ　　　　　　　　　　　ﾐ
::::::..　 /　ﾞ" i　　　　ヽ　　　　　"彡　　　　　　　　　　　iｌ
:::::::::　i;;;;;;;;　ｌ　　　０　ヽ　　　　　ﾘ､　　　　　　　　　 ,,iﾘ
:::::::::::ｌ;;;;;;;;;;; ｌ 　　　　　 ｌ　　　　　　ミ,,､､,ｒ　､　 ,,从ﾙﾞ
:::::::::::ｌ;;;;;;;;;;;; ｌ　　　　ｰ'｀ｌ　　　　　　　　　 ﾞ"｀'｀ﾞ´
::::::::::ｌ;;;;;;;;;;;;;; ｌ　　　　　人
　　　　　　　　　　　／;;;;;ｌ`;

const ASCII6 = `　　　　　　　　　　　　　　　　　　　　 　 　 　 　 　 　 　 　 __
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 -‐ﾆ ┤
　　　　　　　　　　　　　　　　　　　　　　　＿　 -‐ ´ ／　　 }
　　　　　　　　　　　　　　　　　＿＿ ／´　　　 　 　 ｀ヽ､　 j
　　　　　　　　　　　　　_ -‐二 ─ｧ　　　　　　　　　(:.r:.) ヽﾉ
　　　　　　　　　　　　く ￣　　　/　　 (:.r:.)　　　　　 　　　 ヽ＼
　 　 　 　 　 　 　 　 　 ＼　　/　/　 　　 　　　　､＿,　　　　}　ヽ
　　　　 　 　 　 　 　 　 　 ヽ/ 　 {　　　　　　　ｰ´　　 　 　 ﾉ　　ヽ
　　　　　　　　　　　　　　　/　　 ﾊ　　　　　　　　 　 　 　 ｲ 　　　 ヽ
　　　　　　　　　　　　　　 ,′ 　 | ゝ　　　　　　　　 　 ／　l　　　　　ヽ＿┐
　　　　　　　 　 ＿　　　　l　 　 ├─｀ｰ ┬-　　　　l´　　　l　　　　　ヽ //
　　　　　　　　　＼ヽミヽ/　　 　 !　　　　 l　 　 　 　 !　　　 l　　　　 ／ﾍ
　　　／⌒　　　　 ヽ＼〃ミヽ､　j　　　　 ,'　　　　　　l＼　 ∧_　／／　ﾟ　＼
　　/　 (　　　　　 　｀ノ　　　　＼､　　　　l　　　　　　 ＼/レ-＜　､　ﾟ､＿　＿ )
　/　　　＼　　 　 ／o　 　　　 ﾉヽ＼　　ハ　 i　　　　　ヾ､:..ヽ　＼ﾟ｀ヽ､　 ＼
　{　　　　r‐｀￣　／　o　 o ／　｀ｰ┘　{　{　 |　　　　　　　｀"ヽ　｀ヽ､_)｀ｰ--'
　､　　　　ゝ-／ 　　／　 ／　　 　 　 　 ! 丶 {　　　　　　　　　 ヽ
　　＼　　　 'ｰ─／__ ／　　　　　　　／ l　 ∨　 　 /　　　　　　 }
　　　 ＼　　　　　´　　　　　　_ -‐ ´　 　 l　　{　　 ∧ 　　　　　 ﾉ
　　　　　｀　ｰ─--　　-─ ´　　　　　　 ((l,　 H 　 ト､ゝ─ ´　／
　　　　　　　　　　　　　　　　　　　　　　　 〉　ハ　/ (r　　,　'´
　　　　　　　　　　　　　　　　　　　　　　　ゝノ/　ノ　 ￣'
　　　　　　　　　　　　　　　　 　 　 　 　 　 　 ￣`;

const ASCII7 = `　　∧∧　　　∧∧　　　　∧∧　　　∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　∧∧　　　　∧∧　　　　∧∧
　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)
　と　　つ　　と　　つ　　と　　つ　　と　　つ　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ
～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　 ～( ⊃ﾉ　　～( ⊃ﾉ
　　し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　 し'　　 　　　し'
　　∧∧　　　∧∧　　　　∧∧　　　∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　∧∧　　　　∧∧　　　　∧∧
　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)
　と　　つ　　と　　つ　　と　　つ　　と　　つ　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ
～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　 ～( ⊃ﾉ　　～( ⊃ﾉ
　　し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　 し'　　 　　　し'
　　∧∧　　　∧∧　　　　∧∧　　　∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　∧∧　　　　∧∧　　　　∧∧
　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)
　と　　つ　　と　　つ　　と　　つ　　と　　つ　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ
～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　 ～( ⊃ﾉ　　～( ⊃ﾉ
　　し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　 し'　　 　　　し'
　　∧∧　　　∧∧　　　　∧∧　　　∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　　∧∧　　　 ∧∧　　　∧∧　　　　∧∧　　　　∧∧
　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)　　 (*ﾟワﾟ)　　 (*ﾟワﾟ)　　　(*ﾟワﾟ)　　　(*ﾟワﾟ)
　と　　つ　　と　　つ　　と　　つ　　と　　つ　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　と　　つ　　 と　　つ
～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　　～( ⊃ﾉ　 ～( ⊃ﾉ　　～( ⊃ﾉ
　　し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　　し'　　　　　し'　　　　　し'　　　　　 し'　　　　 し'　　 　　　し'`;


const ASCII8 = `.:.:.:.:.:.:.:.:.:.:.:.:., '´　　　, '´.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:。.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:。.:.:
.:.:.:.:.:.:.:.:.:.:.,.'　　 　 ,.'.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:゜.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:
: : : : : : : ,'　　　　,': : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :
: : : : : : :,!　　　　!: : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : ゜: : : : : : : : : : : : : : :
＋　'　. '!　　 　 '! 　 　 　　 ∧,,∧　　　　みんなキバオウにな～れ！
.　　o　　'､　　　 .'､　　　　（'・ω・）つ━☆ ･ * 。　,　　　　,　　　。　　　　　ﾟ
.　,　　 　 丶.　 　 丶　　　⊂　　ﾉ　　　　　　･　ﾟ +.　　　　　　　　　　,　　　。
　　．。　　　ヽ、　 　 ヽ　　し'´Ｊ　　ﾉi　　　 *　･　°｡　　　　　。
　.　　．。　　　｀'-､,　　｀ー－--‐'" ,ﾉ　　　ﾟ 　・ ☆　　ﾟ.　　　　　,　　　　,。
　　　　　　　　　　　｀ﾞ''ｰ‐- ---‐'''"　　　　　*　　・　　*　☆
　　＋　　　　　ﾟ　　.　＋　　　　　　　.　.　．ﾟ .ﾟ。ﾟ　。　,ﾟ．。ﾟ.　ﾟ．。　.。
　　　　　ﾟ　　.　o　　　　ﾟ　　。　　.　　,　.　.o 。　*　.ﾟ　+　。☆　ﾟ。。．　　.
　　　　　　　　　　　　　　　。　　　 　｡　　*。,　+　。.　o　ﾟ,　。*,　o　。.
　　　　　　　。　　　　　　　　　　　　　　　　　ﾟ　　　.　　　。
　　。　　　　　　,ﾊ,,,ﾊ　 ∩_∩　 ∩w∩　∧,,∧ 　γ''""ヽ　ﾍ⌒ヽﾌ
　　　　　　　　 ( :;;;;;:::) ( :;;;;: ) （ ,,;;;;;;;;）（ .::;;;;;; ） U .,;;;;;;U （ .;;;;;;;;）
　　　　　　　　 （::;;o;;:) (:;;;o;;:) （;;;;o;;;;;）（ :;;O;;;:） （,;;;O;;;） （:;;;ζ;;;）
　　　　　‐''"´'''"""''"｀''""｀"""''''''"´'''"""''"｀''""""'''"''''''"｀"""''''｀'`;

const ASCII9 = `　　　　　　　　＜::ヽ
　　　　　　　　　 |::::::＼　　　　　　　　　　　　　｡'“ﾟ'・*。　。*ﾟ”''｡
　　　　　　　　 ∠ニニﾆ'_　☆　　　　　　　　 *　　　 　ﾟ+ﾟ　 　 　♪
　　　　　　　　　 (　･(ｪ)･)　/　　ﾟ''+｡.,　 　　 　ﾟ,,　 　　　　 　,.｡+''ﾟ
　　　　　　　　　<´ヽWﾉﾌつ　　　　　 ﾟ“・:+.:.｡♪,,*:...｡.:.+・ ”ﾟ
. 　ミ≡=_､＿.　(,ﾉ(,, _,-､ゝ＿_＿ -､　 　 　　　　 ﾟ*｡　 　　　　,
.　彡≡=-'´￣￣｀~し'ヽ)￣ ￣￣ﾞ"′　 　　 　 　　　ﾟ・*｡+・`;


const ASCIIlist = [ASCII0, ASCII1, ASCII2, ASCII3, ASCII4, ASCII5, ASCII6, ASCII7, ASCII8, ASCII9];

// ==============================================================

const getRandomASCII = () => {
    return ASCIIlist[Math.floor(Math.random() * ASCIIlist.length)];
};

// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================

function NavBar() {

    // ==============================================

    // ==============================================

    const [ASCIIplace, setASCIIplace] = useState(ASCII0);

    useEffect(() => setASCIIplace(getRandomASCII()), [])

    const changeRandomASCII = () => {
        // shuffle array and pick random
        const randomASCII = getRandomASCII();
        setASCIIplace(randomASCII);
    };

    const addBunny = () => {
        // const newBunny = <Image src={'/bunnypic.gif'} />;
        // let body = document.querySelector("container");
        // useEffect(() => body.appendChild(newBunny), []);
    }

    return (
        <div className={styles.container}>

            <Head>
                <title>ula bitinaitis</title>
                <meta name="description" content="generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Draggable>
                <img src="/websitebanner.gif" draggable="false" style={{
                    width: 640 * .75, height: 390 * .75, alt: "ula bitinaitis", objectFit: "cover",
                    onmousedown: "return false", userdrag: "none", position: "relative", top: "50px", left: "70px"
                }} />
            </Draggable>


            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-250px", left: "620px" }}>
                    <div className="candywrappink">
                        <a href="/about">about me!</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-290px", left: "900px" }}>
                    <div className="candywrapblue">
                        <a href="/coding">coding projects!</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-270px", left: "930px" }}>
                    <div className="candywrapyellow">
                        <a href="/art">my art!</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-360px", left: "680px" }}>
                    <div className="candywrapgreen">
                        <Link href={"https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing"}>
                            <a target="_blank">
                                my resume!</a>
                        </Link> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-450px", left: "1250px" }}>fun things you can do:</div>
            </Draggable>


            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-450px", left: "1250px" }}>
                    <div className="candywrapgreen">
                        <Link href={"https://docs.google.com/document/d/1qNBZSG3nfc_zMkDL9os0c4fB2IgZKLLWKeex-YcnLKs/edit?usp=sharing"}>
                            <a target="_blank">
                                view my bread recipe</a>
                        </Link> ❤</div></div>
            </Draggable>



            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-450px", left: "1200px" }}>
                    <div className="candywrappurple">
                        <a href="javascript:void(0)" onClick={changeRandomASCII}>
                            change the ASCII</a > ❤
                    </div>
                </div>
            </Draggable>



            {/* <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-450px", left: "1250px" }}>
                    <div className="candywrappink">
                        <a href="javascript:void(0)" onClick={addBunny}>
                            create a new bunny ❤</a>
                    </div>
                </div>
            </Draggable> */}



            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-200px", left: "1300px", marginTop: "-250px" }}>
                    <div className="candywraporange">
                        <a href="/friends">see my friends!</a>❤</div></div>
            </Draggable>

            <Draggable>
                <pre style={{
                    fontFamily: "MS PGothic", position: "absolute", left: "1100px", top: "400px",
                    display: "inline-block", backgroundColor: "transparent",
                }}>
                    {ASCIIplace}
                </pre>
            </Draggable>

            <Draggable>
                <img src="/partyhat.gif" draggable="false" style={{ objectFit: "cover", width: "90px",
                    onmousedown: "return false", userdrag: "none",
                    position: "absolute", top: "30px", left: "1100px", zIndex: "999999"
                }} />
            </Draggable>

            <Draggable>
                <img src="/bowtie.gif" draggable="false" style={{ objectFit: "cover", width: "130px",
                    onmousedown: "return false", userdrag: "none",
                    position: "absolute", top: "30px", left: "1100px", zIndex: "999999"
                }} />
            </Draggable>

            <Draggable>
                <img src="/flower.gif" draggable="false" style={{ objectFit: "cover", width: "80px",
                    onmousedown: "return false", userdrag: "none",
                    position: "absolute", top: "30px", left: "1100px", zIndex: "999999"
                }} />
            </Draggable>

            <Draggable>
                <img src="/glasses.gif" draggable="false" style={{ objectFit: "cover", width: "160px",
                    onmousedown: "return false", userdrag: "none",
                    position: "absolute", top: "30px", left: "1100px", zIndex: "999999"
                }} />
            </Draggable>

            <Draggable>
                <img src="/magnifyingglass.gif" draggable="false" style={{ objectFit: "cover", width: "130px",
                    onmousedown: "return false", userdrag: "none",
                    position: "absolute", top: "30px", left: "1100px", zIndex: "999999"
                }} />
            </Draggable>
        </div>

    )

}

export default NavBar