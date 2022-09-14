import React from 'react'

const Polygon = ({color, width, height}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 43 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0453 0.00692811C12.0242 0.00959712 11.9496 0.0211715 11.8795 0.0326417C11.8094 0.0441249 11.692 0.0706978 11.6186 0.0916853C11.5452 0.112673 11.4145 0.159517 11.3281 0.195776C11.1948 0.25176 10.5805 0.62102 7.25994 2.64111C5.10883 3.94976 3.29143 5.05783 3.2213 5.10348C3.1285 5.16387 3.04843 5.23254 2.92719 5.35572C2.82078 5.46382 2.73166 5.56874 2.68054 5.64613C2.63651 5.71276 2.56992 5.82994 2.53257 5.90652C2.49522 5.9831 2.44435 6.10812 2.41952 6.18432C2.39468 6.26054 2.36288 6.38064 2.34884 6.45122C2.33478 6.52181 2.31734 6.644 2.31007 6.72277C2.30122 6.81858 2.29686 8.40656 2.29688 11.5205C2.2969 14.6699 2.30125 16.2234 2.31032 16.3247C2.31769 16.407 2.3382 16.5411 2.35591 16.6226C2.37364 16.7041 2.40818 16.8301 2.43269 16.9025C2.4572 16.975 2.50534 17.0928 2.53964 17.1644C2.57394 17.236 2.63562 17.3474 2.67668 17.4118C2.71775 17.4763 2.78669 17.5737 2.82991 17.6283C2.87312 17.6829 2.96784 17.7855 3.04041 17.8561C3.11297 17.9268 3.22545 18.0232 3.29035 18.0702C3.35527 18.1173 5.11529 19.1865 7.20154 20.4463C9.28778 21.7061 11.0578 22.7703 11.1349 22.8112C11.2119 22.8521 11.3466 22.9093 11.4341 22.9384C11.5215 22.9674 11.6576 23.0022 11.7363 23.0157C11.8151 23.0292 11.9398 23.0441 12.0134 23.0489C12.087 23.0537 12.2199 23.0511 12.3087 23.0433C12.3974 23.0354 12.5151 23.0202 12.5701 23.0095C12.6251 22.9989 12.7231 22.9754 12.7879 22.9575C12.8527 22.9395 12.9564 22.9051 13.0185 22.8809C13.0805 22.8567 13.1739 22.8151 13.2259 22.7885C13.2779 22.7618 14.5283 22.0092 16.0046 21.116C17.4809 20.2228 19.472 19.0203 20.4293 18.4438C21.3866 17.8673 23.3147 16.7027 24.7138 15.8557C26.1129 15.0087 27.3036 14.294 27.3597 14.2674C27.4158 14.2408 27.5074 14.203 27.5631 14.1835C27.6189 14.1639 27.725 14.1338 27.799 14.1166C27.873 14.0995 28.0124 14.0784 28.1089 14.0699C28.245 14.0579 28.3243 14.0579 28.4636 14.0701C28.5623 14.0787 28.7114 14.1005 28.795 14.1186C28.8786 14.1366 29.0119 14.1742 29.0913 14.2021C29.1707 14.2301 29.2793 14.2733 29.3328 14.2981C29.3862 14.323 30.3528 14.9013 31.4807 15.5833C32.6086 16.2653 33.5658 16.8468 33.6079 16.8756C33.65 16.9044 33.7275 16.9646 33.7801 17.0093C33.8327 17.0541 33.9106 17.1278 33.9532 17.1732C33.9959 17.2185 34.0569 17.2878 34.0888 17.3272C34.1207 17.3666 34.1851 17.4587 34.2319 17.5319C34.2787 17.6051 34.3477 17.731 34.3853 17.8118C34.4228 17.8925 34.4735 18.0201 34.498 18.0953C34.5225 18.1705 34.5545 18.2936 34.5691 18.3687C34.5838 18.4439 34.6016 18.5699 34.6087 18.6487C34.6169 18.7397 34.6216 19.7045 34.6216 21.2981C34.6216 22.9282 34.617 23.8545 34.6084 23.9476C34.6011 24.0264 34.5838 24.148 34.5699 24.2178C34.556 24.2876 34.5245 24.4076 34.4998 24.4845C34.4751 24.5614 34.4275 24.6829 34.3939 24.7546C34.3603 24.8264 34.3026 24.9346 34.2658 24.9952C34.2289 25.0558 34.1607 25.1554 34.1141 25.2165C34.0675 25.2776 33.9739 25.3835 33.906 25.4518C33.8382 25.5201 33.7261 25.6187 33.657 25.671C33.5879 25.7234 32.6276 26.326 31.5231 27.0101C30.4185 27.6943 29.4573 28.282 29.3872 28.316C29.3171 28.35 29.2046 28.3958 29.1372 28.4177C29.0698 28.4396 28.9579 28.4701 28.8885 28.4853C28.7972 28.5054 28.6972 28.515 28.5263 28.5201C28.3769 28.5246 28.2482 28.5216 28.1756 28.5119C28.1126 28.5034 28.0044 28.4846 27.9353 28.4701C27.8661 28.4556 27.7497 28.4235 27.6767 28.3988C27.6037 28.3741 27.492 28.3306 27.4286 28.3021C27.3652 28.2736 26.3913 27.6929 25.2644 27.0116C24.1375 26.3304 23.1647 25.7376 23.1026 25.6944C23.0405 25.6512 22.9297 25.5574 22.8564 25.4859C22.783 25.4145 22.6857 25.3086 22.6401 25.2507C22.5945 25.1928 22.525 25.0927 22.4856 25.0282C22.4463 24.9638 22.3842 24.8466 22.3478 24.7678C22.3113 24.6891 22.2639 24.569 22.2424 24.5009C22.2209 24.4329 22.1971 24.3538 22.1896 24.3252C22.182 24.2965 22.1634 24.2028 22.1482 24.1169C22.121 23.9634 22.1204 23.931 22.1133 22.2914L22.1061 20.6222L20.3305 21.6913L18.5549 22.7604V24.4502C18.5549 25.8828 18.5578 26.1629 18.5741 26.2901C18.5847 26.3727 18.6102 26.5065 18.6306 26.5877C18.6511 26.6688 18.6859 26.7817 18.7079 26.8386C18.7299 26.8955 18.7766 27.0003 18.8117 27.0715C18.8469 27.1426 18.9151 27.2598 18.9634 27.3318C19.0116 27.4039 19.0943 27.5133 19.147 27.575C19.1997 27.6366 19.3002 27.7375 19.3705 27.7991C19.4407 27.8606 19.5401 27.94 19.5915 27.9753C19.6428 28.0107 21.4002 29.075 23.4968 30.3403C25.5933 31.6057 27.3595 32.6671 27.4216 32.699C27.4837 32.7309 27.5938 32.7772 27.6661 32.8019C27.7385 32.8266 27.8512 32.8584 27.9166 32.8725C27.982 32.8866 28.1138 32.905 28.2093 32.9133C28.3419 32.9248 28.4245 32.9247 28.5575 32.9131C28.6533 32.9046 28.7903 32.8859 28.8618 32.8714C28.9334 32.8569 29.0689 32.8189 29.163 32.7869C29.2572 32.755 29.3863 32.7034 29.45 32.6724C29.5136 32.6413 31.2814 31.5803 33.3784 30.3146C35.4754 29.0489 37.2255 27.9897 37.2676 27.9609C37.3096 27.9321 37.383 27.8763 37.4305 27.8369C37.478 27.7975 37.5699 27.7085 37.6345 27.639C37.6992 27.5695 37.7909 27.4575 37.8383 27.3901C37.8856 27.3227 37.9663 27.1826 38.0176 27.0787C38.0689 26.9748 38.1313 26.8254 38.1564 26.7467C38.1815 26.668 38.214 26.5421 38.2287 26.4669C38.2434 26.3917 38.2612 26.2657 38.2683 26.187C38.2768 26.0932 38.2813 24.4225 38.2812 21.3437C38.2812 18.0964 38.277 16.5974 38.2675 16.4939C38.26 16.4116 38.2427 16.2889 38.2291 16.2213C38.2155 16.1538 38.1815 16.0285 38.1534 15.9428C38.1254 15.8572 38.0742 15.7279 38.0397 15.6556C38.0052 15.5832 37.9432 15.4712 37.9019 15.4068C37.8606 15.3424 37.7914 15.2449 37.7482 15.1903C37.705 15.1357 37.6103 15.0331 37.5377 14.9625C37.4652 14.8918 37.3517 14.7947 37.2857 14.7468C37.2196 14.6989 35.4598 13.6297 33.375 12.3708C31.2901 11.1118 29.5171 10.0466 29.4348 10.0035C29.3525 9.9605 29.2278 9.90615 29.1577 9.88274C29.0875 9.85934 28.9756 9.82879 28.909 9.81485C28.8424 9.80091 28.7162 9.78287 28.6285 9.77476C28.5401 9.76657 28.4123 9.76384 28.3416 9.76866C28.2714 9.77344 28.1567 9.78586 28.0865 9.79626C28.0164 9.80668 27.8942 9.83285 27.815 9.85443C27.7358 9.87602 27.6331 9.90824 27.5868 9.92605C27.5404 9.94385 27.4561 9.97985 27.3992 10.006C27.3424 10.0322 26.113 10.779 24.6672 11.6655C22.0485 13.2712 22.0317 13.2813 20.2298 14.3175L18.421 15.3577L15.839 16.9696C14.4189 17.8562 13.1996 18.6094 13.1293 18.6433C13.0591 18.6773 12.9471 18.7232 12.8805 18.7453C12.8139 18.7675 12.702 18.7975 12.6318 18.8121C12.5442 18.8304 12.4305 18.841 12.2684 18.846C12.0858 18.8517 11.9983 18.8485 11.8809 18.8317C11.7974 18.8197 11.6641 18.7928 11.5845 18.7719C11.5049 18.7509 11.3838 18.7124 11.3154 18.6864C11.2469 18.6602 11.1524 18.6191 11.1052 18.595C11.0581 18.5708 10.0913 17.9675 8.95663 17.2543C7.82202 16.541 6.84206 15.9176 6.77894 15.869C6.71582 15.8203 6.60644 15.7198 6.53588 15.6457C6.46531 15.5716 6.37591 15.467 6.33722 15.4133C6.29853 15.3596 6.24086 15.2717 6.20906 15.2179C6.17726 15.1641 6.134 15.085 6.11295 15.0421C6.0919 14.9992 6.05355 14.9093 6.02775 14.8423C6.00195 14.7753 5.96394 14.6536 5.94329 14.5718C5.92265 14.4901 5.89708 14.3556 5.88649 14.2731C5.86985 14.1435 5.86723 13.7688 5.86732 11.5296C5.8674 9.84134 5.872 8.89538 5.88052 8.81945C5.88771 8.75529 5.90236 8.65951 5.91306 8.60662C5.92376 8.55372 5.94688 8.45974 5.96442 8.39777C5.98197 8.33581 6.0223 8.22218 6.05406 8.14526C6.08582 8.06834 6.14996 7.94025 6.19657 7.8606C6.24321 7.78096 6.32812 7.65622 6.38526 7.58338C6.4424 7.51055 6.53988 7.40196 6.60187 7.34204C6.66386 7.28213 6.76636 7.19339 6.82964 7.14484C6.89293 7.09629 7.87142 6.49585 9.00407 5.81053C10.1367 5.12521 11.1208 4.53649 11.1909 4.50227C11.2611 4.46806 11.373 4.42193 11.4396 4.39978C11.5062 4.37762 11.6181 4.34743 11.6882 4.33269C11.7786 4.31367 11.8862 4.30383 12.058 4.29886C12.2449 4.29344 12.335 4.29679 12.452 4.31346C12.5354 4.32536 12.6686 4.35221 12.7481 4.37313C12.8275 4.39404 12.9601 4.43837 13.0427 4.47164C13.1253 4.5049 13.2135 4.54279 13.2387 4.55582C13.2639 4.56886 14.2222 5.16912 15.3682 5.88974C16.5142 6.61036 17.4925 7.23156 17.5421 7.27019C17.5917 7.30882 17.6697 7.37548 17.7155 7.41831C17.7613 7.46114 17.8392 7.54481 17.8886 7.60423C17.938 7.66364 18.0162 7.77002 18.0624 7.84064C18.1087 7.91124 18.1777 8.03428 18.2158 8.11405C18.2539 8.19381 18.3021 8.30887 18.3228 8.36974C18.3435 8.4306 18.3726 8.5302 18.3875 8.59107C18.4023 8.65194 18.4242 8.76032 18.436 8.83193C18.4552 8.94794 18.4584 9.14906 18.4648 10.6768L18.472 12.3915L20.2476 11.3223L22.0233 10.2531V8.51362C22.0233 7.37861 22.0186 6.73583 22.0099 6.66384C22.0025 6.60316 21.9854 6.49895 21.9719 6.43225C21.9583 6.36556 21.9268 6.24839 21.9017 6.17186C21.8767 6.09534 21.828 5.97224 21.7934 5.89831C21.7589 5.82437 21.6942 5.70719 21.6496 5.63792C21.605 5.56864 21.5335 5.46758 21.4907 5.41334C21.4478 5.3591 21.3587 5.26202 21.2927 5.19758C21.2267 5.13316 21.1235 5.04278 21.0634 4.99674C21.0032 4.95072 19.2571 3.87605 17.1831 2.6086C15.1091 1.34114 13.3744 0.282421 13.3281 0.255875C13.2818 0.229328 13.186 0.18402 13.1152 0.155208C13.0444 0.126382 12.9325 0.0883262 12.8666 0.0706327C12.8006 0.0529392 12.6856 0.0293998 12.6111 0.0183202C12.5279 0.00596467 12.3998 -0.00106588 12.2795 0.000131914C12.1717 0.00119952 12.0663 0.00425911 12.0453 0.00692811Z" fill={color}/>
      <path d="M1.75088 41.6062C1.92153 41.3513 2.15703 41.1454 2.45738 40.9885C2.75772 40.8316 3.10926 40.7531 3.512 40.7531C3.983 40.7531 4.40963 40.8675 4.79188 41.0963C5.17414 41.3251 5.47449 41.652 5.69292 42.0769C5.91818 42.5019 6.03081 42.9954 6.03081 43.5577C6.03081 44.1199 5.91818 44.6167 5.69292 45.0482C5.47449 45.4731 5.17414 45.8032 4.79188 46.0386C4.40963 46.2674 3.983 46.3818 3.512 46.3818C3.11609 46.3818 2.76455 46.3033 2.45738 46.1464C2.15703 45.9895 1.92153 45.7869 1.75088 45.5385V48.9117H0V40.8316H1.75088V41.6062ZM4.24921 43.5577C4.24921 43.1393 4.12635 42.8124 3.88061 42.577C3.6417 42.3352 3.34476 42.2142 2.98981 42.2142C2.64168 42.2142 2.34475 42.3352 2.09901 42.577C1.8601 42.8189 1.74064 43.1491 1.74064 43.5675C1.74064 43.9858 1.8601 44.316 2.09901 44.5579C2.34475 44.7997 2.64168 44.9207 2.98981 44.9207C3.33794 44.9207 3.63487 44.7997 3.88061 44.5579C4.12635 44.3094 4.24921 43.976 4.24921 43.5577Z" fill={color}/>
      <path d="M9.55009 46.3818C8.99036 46.3818 8.48523 46.2674 8.03471 46.0386C7.59102 45.8098 7.23948 45.4829 6.98009 45.058C6.72752 44.633 6.60124 44.1362 6.60124 43.5675C6.60124 43.0052 6.73093 42.5117 6.99032 42.0867C7.24971 41.6553 7.60467 41.3251 8.05519 41.0963C8.50571 40.8675 9.01083 40.7531 9.57057 40.7531C10.1303 40.7531 10.6354 40.8675 11.086 41.0963C11.5365 41.3251 11.8914 41.6553 12.1508 42.0867C12.4102 42.5117 12.5399 43.0052 12.5399 43.5675C12.5399 44.1297 12.4068 44.6265 12.1406 45.058C11.8812 45.4829 11.5228 45.8098 11.0655 46.0386C10.615 46.2674 10.1098 46.3818 9.55009 46.3818ZM9.55009 44.9305C9.88457 44.9305 10.1678 44.8128 10.3999 44.5775C10.6388 44.3421 10.7583 44.0055 10.7583 43.5675C10.7583 43.1295 10.6423 42.7928 10.4102 42.5574C10.1849 42.3221 9.90505 42.2044 9.57057 42.2044C9.22927 42.2044 8.94599 42.3221 8.72073 42.5574C8.49547 42.7862 8.38284 43.1229 8.38284 43.5675C8.38284 44.0055 8.49205 44.3421 8.71049 44.5775C8.93575 44.8128 9.21562 44.9305 9.55009 44.9305Z" fill={color}/>
      <path d="M15.2197 39.0469V46.3033H13.4688V39.0469H15.2197Z" fill={color}/>
      <path d="M22.3248 40.8316L18.7411 48.9019H16.8571L18.1677 46.117L15.8434 40.8316H17.7991L19.1199 44.2539L20.4305 40.8316H22.3248Z" fill={color}/>
      <path d="M25.1286 40.7531C25.5313 40.7531 25.8829 40.8316 26.1832 40.9885C26.4904 41.1454 26.7259 41.3513 26.8897 41.6062V40.8316H28.6406V46.2935C28.6406 46.7969 28.5348 47.2513 28.3232 47.6566C28.1184 48.0684 27.801 48.3953 27.371 48.6372C26.9477 48.8791 26.4187 49 25.7839 49C24.9375 49 24.2514 48.8071 23.7258 48.4214C23.2002 48.0423 22.8999 47.5258 22.8248 46.8721H24.5552C24.6098 47.0813 24.7395 47.2447 24.9443 47.3624C25.1491 47.4866 25.4016 47.5487 25.702 47.5487C26.0638 47.5487 26.3505 47.4474 26.5621 47.2447C26.7805 47.0486 26.8897 46.7315 26.8897 46.2935V45.5189C26.7191 45.7738 26.4836 45.983 26.1832 46.1464C25.8829 46.3033 25.5313 46.3818 25.1286 46.3818C24.6576 46.3818 24.231 46.2674 23.8487 46.0386C23.4665 45.8032 23.1627 45.4731 22.9374 45.0482C22.719 44.6167 22.6098 44.1199 22.6098 43.5577C22.6098 42.9954 22.719 42.5019 22.9374 42.0769C23.1627 41.652 23.4665 41.3251 23.8487 41.0963C24.231 40.8675 24.6576 40.7531 25.1286 40.7531ZM26.8897 43.5675C26.8897 43.1491 26.7668 42.8189 26.5211 42.577C26.2822 42.3352 25.9887 42.2142 25.6405 42.2142C25.2924 42.2142 24.9955 42.3352 24.7497 42.577C24.5108 42.8124 24.3914 43.1393 24.3914 43.5577C24.3914 43.976 24.5108 44.3094 24.7497 44.5579C24.9955 44.7997 25.2924 44.9207 25.6405 44.9207C25.9887 44.9207 26.2822 44.7997 26.5211 44.5579C26.7668 44.316 26.8897 43.9858 26.8897 43.5675Z" fill={color}/>
      <path d="M32.508 46.3818C31.9483 46.3818 31.4431 46.2674 30.9926 46.0386C30.5489 45.8098 30.1974 45.4829 29.938 45.058C29.6854 44.633 29.5592 44.1362 29.5592 43.5675C29.5592 43.0052 29.6888 42.5117 29.9482 42.0867C30.2076 41.6553 30.5626 41.3251 31.0131 41.0963C31.4636 40.8675 31.9687 40.7531 32.5285 40.7531C33.0882 40.7531 33.5933 40.8675 34.0439 41.0963C34.4944 41.3251 34.8493 41.6553 35.1087 42.0867C35.3681 42.5117 35.4978 43.0052 35.4978 43.5675C35.4978 44.1297 35.3647 44.6265 35.0985 45.058C34.8391 45.4829 34.4807 45.8098 34.0234 46.0386C33.5729 46.2674 33.0677 46.3818 32.508 46.3818ZM32.508 44.9305C32.8425 44.9305 33.1258 44.8128 33.3578 44.5775C33.5968 44.3421 33.7162 44.0055 33.7162 43.5675C33.7162 43.1295 33.6002 42.7928 33.3681 42.5574C33.1428 42.3221 32.863 42.2044 32.5285 42.2044C32.1872 42.2044 31.9039 42.3221 31.6786 42.5574C31.4534 42.7862 31.3407 43.1229 31.3407 43.5675C31.3407 44.0055 31.45 44.3421 31.6684 44.5775C31.8937 44.8128 32.1735 44.9305 32.508 44.9305Z" fill={color}/>
      <path d="M39.908 40.7727C40.5769 40.7727 41.1094 40.9819 41.5053 41.4003C41.908 41.8122 42.1094 42.3809 42.1094 43.1066V46.3033H40.3687V43.3321C40.3687 42.966 40.2698 42.6816 40.0718 42.479C39.8738 42.2763 39.6076 42.175 39.2732 42.175C38.9387 42.175 38.6725 42.2763 38.4745 42.479C38.2766 42.6816 38.1776 42.966 38.1776 43.3321V46.3033H36.4267V40.8316H38.1776V41.5572C38.355 41.3153 38.594 41.1258 38.8943 40.9885C39.1947 40.8446 39.5325 40.7727 39.908 40.7727Z" fill={color}/>
    </svg>
  )
}

export default Polygon