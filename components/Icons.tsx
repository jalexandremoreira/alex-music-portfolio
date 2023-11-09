'use client';
import React from 'react';

export interface IconProps {
  size: number;
  color: string;
}

export function AMHorizontal({ size, color }: IconProps) {
  return (
    <svg width={size} height={size / 9} viewBox="0 0 825 84" fill="none">
      <path
        d="M32.2931 79.3338C31.23 80.0633 29.3947 81.0116 26.787 82.1788C24.1794 83.346 20.6458 83.9297 16.1863 83.9297C10.9092 83.9297 6.75966 82.4342 3.73765 79.4432C0.725324 76.3793 -0.466184 72.4764 0.163127 67.7346C1.01512 61.315 4.59636 56.1719 10.9069 52.3056C17.2917 48.4392 24.6463 46.506 32.9707 46.506H36.5383L36.8433 44.2081C37.2887 40.8523 36.671 38.2261 34.9903 36.3294C33.3192 34.3597 31.1458 33.3749 28.4701 33.3749C26.0917 33.3749 23.9655 33.995 22.0914 35.2351C20.2917 36.4753 19.1546 38.8827 18.6802 42.4572H4.18677C4.95162 36.6941 7.66047 32.2442 12.3133 29.1073C16.9662 25.9704 22.8602 24.402 29.9954 24.402C37.5766 24.402 43.0899 26.2622 46.5354 29.9827C50.0649 33.6302 51.4181 38.5544 50.5952 44.7552L45.4978 83.1637H31.7848L32.2931 79.3338ZM35.3039 55.8072C29.3029 55.6613 24.3879 56.5732 20.5589 58.5428C16.7299 60.5125 14.5879 63.2117 14.1328 66.6404C13.7456 69.5584 14.1854 71.5645 15.4524 72.6588C16.729 73.6801 18.2592 74.1907 20.043 74.1907C23.1647 74.1907 26.2134 73.06 29.1893 70.7985C32.2394 68.5371 33.9775 65.8014 34.4035 62.5916L35.3039 55.8072Z"
        fill={color}
      />
      <path
        d="M69.4676 83.1637H55.5317L64.7825 13.4594C65.0827 11.1979 65.0953 9.70243 64.8205 8.97292C64.6297 8.17047 64.2515 7.65981 63.686 7.44096C62.5549 7.00326 61.6467 6.56555 60.9616 6.12785C60.3604 5.61719 60.147 4.70531 60.3213 3.3922C60.6214 1.13073 62.3694 -4.30457e-08 65.5654 0L75.7108 1.36645e-07C78.9068 1.79691e-07 80.345 1.20368 80.0256 3.61105L69.4676 83.1637Z"
        fill={color}
      />
      <path
        d="M94.0097 57.0109C93.7261 61.3879 94.8288 65.4002 97.3177 69.0477C99.8163 72.6223 103.42 74.592 108.128 74.9567C109.744 75.1026 111.496 75.0662 113.383 74.8473C115.28 74.5555 117.178 73.9719 119.078 73.0965C121.443 72.0752 123.154 71.7834 124.211 72.2211C125.352 72.5858 126.142 73.3518 126.582 74.519C126.753 75.4674 126.581 76.4887 126.064 77.583C125.631 78.6043 124.851 79.4432 123.723 80.0997C121.561 81.267 118.718 82.2518 115.192 83.0542C111.741 83.8567 107.949 84.1485 103.816 83.9297C96.0794 83.419 89.8985 80.428 85.2732 74.9567C80.6479 69.4854 78.9743 61.935 80.2523 52.3056C81.3947 43.6974 84.7107 36.913 90.2002 31.9524C95.6994 26.9188 102.611 24.402 110.936 24.402C118.071 24.402 123.563 26.6999 127.413 31.2958C131.262 35.8917 132.563 42.8949 131.314 52.3056L130.689 57.0109H94.0097ZM95.2296 47.8191H117.973C118.622 42.9314 117.986 39.3204 116.066 36.9859C114.23 34.5786 112.012 33.3749 109.41 33.3749C106.437 33.3749 103.508 34.7245 100.623 37.4237C97.8119 40.1228 96.0142 43.588 95.2296 47.8191Z"
        fill={color}
      />
      <path
        d="M183.884 30.8581L165.342 52.9621L181.513 83.1637H166.462L156.071 64.0141L139.928 83.1637H126.438L150.441 53.5093L142.218 38.1896C141.555 37.0224 140.86 35.8187 140.133 34.5786C139.405 33.3384 138.866 32.6454 138.513 32.4995C137.263 31.8429 136.438 31.3323 136.041 30.9675C135.653 30.5298 135.537 29.7274 135.691 28.5602C135.934 26.7364 137.69 25.8245 140.96 25.8245H150.882L159.644 42.129L172.957 25.8245H181.542C183.177 25.8245 184.14 26.4081 184.431 27.5753C184.796 28.7425 184.614 29.8368 183.884 30.8581Z"
        fill={color}
      />
      <path
        d="M214.91 79.3338C213.847 80.0633 212.012 81.0116 209.404 82.1788C206.796 83.346 203.263 83.9297 198.803 83.9297C193.526 83.9297 189.377 82.4342 186.355 79.4432C183.342 76.3793 182.151 72.4764 182.78 67.7346C183.632 61.315 187.213 56.172 193.524 52.3056C199.909 48.4392 207.263 46.506 215.588 46.506L219.155 46.506L219.46 44.2081C219.906 40.8523 219.288 38.2261 217.607 36.3294C215.936 34.3597 213.763 33.3749 211.087 33.3749C208.709 33.3749 206.583 33.995 204.708 35.2351C202.909 36.4753 201.772 38.8827 201.297 42.4572H186.804C187.569 36.6941 190.278 32.2442 194.93 29.1073C199.583 25.9704 205.477 24.402 212.612 24.402C220.194 24.402 225.707 26.2622 229.152 29.9827C232.682 33.6302 234.035 38.5544 233.212 44.7552L228.115 83.1637H214.402L214.91 79.3338ZM217.921 55.8072C211.92 55.6613 207.005 56.5732 203.176 58.5428C199.347 60.5125 197.205 63.2117 196.75 66.6404C196.363 69.5584 196.802 71.5645 198.069 72.6588C199.346 73.6801 200.876 74.1907 202.66 74.1907C205.782 74.1907 208.83 73.06 211.806 70.7985C214.856 68.5371 216.595 65.8014 217.021 62.5916L217.921 55.8072Z"
        fill={color}
      />
      <path
        d="M250.97 83.1637H237.368L243.192 39.2839C243.502 36.9495 243.551 35.454 243.341 34.7974C243.215 34.0679 242.869 33.5937 242.304 33.3749C241.034 32.8642 240.019 32.3901 239.259 31.9524C238.5 31.5147 238.207 30.6392 238.382 29.3261C238.691 26.9917 240.407 25.8245 243.529 25.8245H253.786C256.982 25.8245 258.405 27.1376 258.057 29.7638L257.795 31.7335C258.729 30.8581 259.807 30.0192 261.028 29.2167C264.899 26.3716 269.287 24.9491 274.193 24.9491C279.544 24.9491 283.618 26.7364 286.414 30.311C289.284 33.8856 290.157 39.904 289.034 48.3662L284.416 83.1637H270.592L275.239 48.1474C275.917 43.0408 275.698 39.6486 274.583 37.9708C273.477 36.22 272.107 35.3446 270.472 35.3446C267.117 35.4175 263.534 37.4966 259.722 41.5818C258.245 43.1867 256.925 45.0105 255.762 47.0531L250.97 83.1637Z"
        fill={color}
      />
      <path
        d="M307.911 54.8224C307.039 61.3879 307.603 66.385 309.6 69.8137C311.608 73.1694 313.949 74.8473 316.625 74.8473C319.598 74.8473 322.366 73.3153 324.928 70.2514C327.49 67.1875 329.202 62.4092 330.063 55.9166L330.993 48.9134C331.641 44.0257 331.057 40.3052 329.241 37.7519C327.424 35.1987 324.881 33.922 321.61 33.922C318.935 33.922 316.217 35.6364 313.458 39.065C310.709 42.4208 308.86 47.6732 307.911 54.8224ZM327.009 79.7715C323.594 82.5436 319.582 83.9297 314.974 83.9297C306.724 83.9297 300.89 81.1211 297.473 75.5039C294.057 69.8867 292.905 62.8834 294.018 54.4941C295.219 45.4482 298.263 38.1896 303.152 32.7183C308.05 27.1741 314.289 24.402 321.871 24.402C326.999 24.402 331.011 25.5327 333.907 27.7942L335.809 13.4594C336.1 11.2709 336.113 9.77538 335.847 8.97293C335.592 8.09752 335.251 7.58686 334.824 7.44096C333.6 7.14916 332.645 6.78441 331.959 6.3467C331.358 5.83605 331.15 4.88769 331.334 3.50163C331.643 1.16721 333.396 3.60733e-06 336.592 3.65038e-06L346.515 3.78402e-06C349.711 3.82706e-06 351.149 1.20369 350.829 3.61106L340.272 83.1637H326.559L327.009 79.7715Z"
        fill={color}
      />
      <path
        d="M358.47 39.2839C358.78 36.9495 358.798 35.4175 358.523 34.688C358.332 33.8856 357.991 33.3749 357.5 33.156C356.349 32.8642 355.399 32.463 354.649 31.9524C353.984 31.3688 353.728 30.4933 353.883 29.3261C354.193 26.9917 355.946 25.8245 359.142 25.8245H368.953C372.223 25.8245 373.684 27.1376 373.335 29.7638L373.219 30.6393C373.807 30.1286 374.427 29.6544 375.08 29.2167C378.802 26.3716 383.376 24.9491 388.802 24.9491H394.488L392.861 37.2048C385.93 35.6728 380.095 36.5118 375.358 39.7216C373.979 40.597 372.699 41.8372 371.52 43.4421L366.248 83.1637H352.647L358.47 39.2839Z"
        fill={color}
      />
      <path
        d="M403.723 57.0109C403.439 61.3879 404.542 65.4002 407.031 69.0477C409.529 72.6223 413.133 74.592 417.841 74.9567C419.457 75.1026 421.209 75.0662 423.096 74.8473C424.993 74.5555 426.891 73.9719 428.791 73.0965C431.156 72.0752 432.867 71.7834 433.924 72.2211C435.065 72.5858 435.855 73.3518 436.295 74.519C436.466 75.4674 436.294 76.4887 435.777 77.583C435.344 78.6043 434.564 79.4432 433.436 80.0997C431.274 81.267 428.431 82.2518 424.905 83.0542C421.454 83.8567 417.662 84.1485 413.529 83.9297C405.793 83.419 399.612 80.428 394.986 74.9567C390.361 69.4854 388.687 61.935 389.965 52.3056C391.108 43.6974 394.424 36.913 399.913 31.9524C405.413 26.9188 412.324 24.402 420.649 24.402C427.784 24.402 433.276 26.6999 437.126 31.2958C440.975 35.8917 442.276 42.8949 441.027 52.3056L440.402 57.0109H403.723ZM404.943 47.8191H427.686C428.335 42.9314 427.699 39.3204 425.779 36.986C423.943 34.5786 421.725 33.3749 419.123 33.3749C416.15 33.3749 413.221 34.7245 410.336 37.4237C407.525 40.1228 405.727 43.588 404.943 47.8191Z"
        fill={color}
      />
      <path
        d="M491.784 83.1637H478.071L483.894 39.2839C484.194 37.0224 484.212 35.4905 483.947 34.688C483.681 33.8856 483.34 33.3749 482.924 33.156C481.55 32.8642 480.6 32.463 480.073 31.9524C479.546 31.4417 479.365 30.5663 479.53 29.3261C479.84 26.9917 481.555 25.8245 484.677 25.8245H494.599C497.795 25.8245 499.219 27.1376 498.871 29.7638L498.754 30.6393C499.09 30.3474 499.431 30.0192 499.777 29.6544C503.073 26.6634 507.22 25.095 512.219 24.9491C517.719 24.9491 521.565 26.7729 523.757 30.4204C524.309 31.2958 524.768 32.3171 525.134 33.4843C525.958 32.3171 526.92 31.2229 528.022 30.2015C531.757 26.6999 536.078 24.9491 540.983 24.9491C546.632 24.9491 550.51 26.8093 552.617 30.5298C554.809 34.1774 555.377 39.9769 554.322 47.9285L549.646 83.1637H535.933L540.565 48.2568C541.233 43.2232 541.21 39.7581 540.496 37.8614C539.856 35.9646 538.718 35.0163 537.083 35.0163C534.927 35.0163 532.134 37.0224 528.703 41.0347C527.488 42.3478 526.509 43.8433 525.766 45.5212L520.77 83.1637H507.057L511.69 48.2568C512.368 43.1503 512.345 39.6851 511.62 37.8614C510.98 35.9646 509.917 35.0163 508.43 35.0163C506.265 35.0892 503.398 37.0954 499.827 41.0347C498.622 42.2749 497.611 43.7339 496.794 45.4117L491.784 83.1637Z"
        fill={color}
      />
      <path
        d="M559.054 54.2752C560.216 45.5212 563.469 38.372 568.813 32.8278C574.241 27.2106 581.377 24.402 590.222 24.402C599.141 24.402 605.569 27.2106 609.506 32.8278C613.452 38.372 614.845 45.5212 613.683 54.2752C612.531 62.9564 609.246 70.069 603.827 75.6133C598.409 81.1575 591.24 83.9297 582.321 83.9297C573.477 83.9297 567.081 81.1575 563.134 75.6133C559.262 70.069 557.902 62.9564 559.054 54.2752ZM573.659 54.2752C572.71 61.4244 573.314 66.6768 575.47 70.0326C577.635 73.3153 580.316 74.9567 583.512 74.9567C586.783 74.9567 589.936 73.3153 592.973 70.0326C596.094 66.6768 598.129 61.4244 599.078 54.2752C600.037 47.0531 599.401 41.7642 597.17 38.4085C595.014 35.0528 592.301 33.3749 589.031 33.3749C585.835 33.3749 582.714 35.0528 579.667 38.4085C576.62 41.7642 574.617 47.0531 573.659 54.2752Z"
        fill={color}
      />
      <path
        d="M623.7 39.2839C624.01 36.9495 624.027 35.4175 623.752 34.688C623.562 33.8856 623.22 33.3749 622.729 33.156C621.579 32.8642 620.629 32.463 619.879 31.9524C619.213 31.3688 618.958 30.4934 619.112 29.3261C619.422 26.9917 621.175 25.8245 624.371 25.8245H634.182C637.452 25.8245 638.913 27.1376 638.565 29.7638L638.449 30.6393C639.037 30.1286 639.657 29.6544 640.31 29.2167C644.032 26.3716 648.606 24.9491 654.032 24.9491H659.718L658.091 37.2048C651.159 35.6728 645.325 36.5118 640.588 39.7216C639.208 40.597 637.929 41.8372 636.749 43.4421L631.478 83.1637H617.876L623.7 39.2839Z"
        fill={color}
      />
      <path
        d="M668.952 57.0109C668.669 61.3879 669.771 65.4002 672.26 69.0477C674.759 72.6223 678.363 74.592 683.071 74.9567C684.687 75.1026 686.438 75.0662 688.325 74.8473C690.222 74.5555 692.121 73.9719 694.021 73.0965C696.386 72.0752 698.097 71.7834 699.154 72.2211C700.295 72.5858 701.085 73.3518 701.525 74.519C701.696 75.4674 701.523 76.4887 701.006 77.583C700.574 78.6043 699.793 79.4432 698.666 80.0998C696.504 81.267 693.66 82.2518 690.135 83.0543C686.684 83.8567 682.892 84.1485 678.758 83.9297C671.022 83.419 664.841 80.428 660.216 74.9567C655.591 69.4854 653.917 61.9351 655.195 52.3056C656.337 43.6974 659.653 36.913 665.143 31.9524C670.642 26.9188 677.554 24.402 685.878 24.402C693.014 24.402 698.506 26.6999 702.355 31.2958C706.205 35.8917 707.505 42.895 706.256 52.3056L705.632 57.0109L668.952 57.0109ZM670.172 47.8191H692.916C693.565 42.9314 692.929 39.3204 691.009 36.986C689.173 34.5786 686.954 33.3749 684.353 33.3749C681.38 33.3749 678.451 34.7245 675.566 37.4237C672.755 40.1228 670.957 43.588 670.172 47.8191Z"
        fill={color}
      />
      <path
        d="M723.901 83.1637H709.965L715.789 39.2839C716.089 37.0224 716.106 35.4905 715.841 34.688C715.576 33.8856 715.235 33.3749 714.818 33.1561C713.529 32.7913 712.583 32.3536 711.982 31.8429C711.381 31.3323 711.148 30.5663 711.284 29.545C711.613 27.0647 713.376 25.8245 716.572 25.8245H726.717C729.913 25.8245 731.337 27.1376 730.988 29.7638L723.901 83.1637ZM734.208 8.86351C733.898 11.1979 732.777 13.2041 730.845 14.8819C728.997 16.4868 726.884 17.2893 724.505 17.2893C722.127 17.2893 720.226 16.4868 718.804 14.8819C717.392 13.2041 716.84 11.1979 717.15 8.86351C717.46 6.52909 718.544 4.52295 720.402 2.84508C722.269 1.09427 724.392 0.218861 726.771 0.218861C729.149 0.218861 731.04 1.09427 732.442 2.84508C733.929 4.52295 734.518 6.52909 734.208 8.86351Z"
        fill={color}
      />
      <path
        d="M741.765 39.2839C742.075 36.9495 742.093 35.4175 741.818 34.688C741.627 33.8856 741.286 33.3749 740.795 33.1561C739.644 32.8642 738.694 32.463 737.944 31.9524C737.279 31.3688 737.023 30.4934 737.178 29.3261C737.488 26.9917 739.241 25.8245 742.437 25.8245H752.248C755.518 25.8245 756.979 27.1376 756.63 29.7638L756.514 30.6393C757.102 30.1286 757.723 29.6544 758.375 29.2167C762.098 26.3716 766.672 24.9491 772.097 24.9491H777.783L776.157 37.2048C769.225 35.6728 763.39 36.5118 758.653 39.7216C757.274 40.597 755.994 41.8372 754.815 43.4421L749.543 83.1637H735.942L741.765 39.2839Z"
        fill={color}
      />
      <path
        d="M806.464 79.3338C805.401 80.0633 803.566 81.0116 800.958 82.1788C798.351 83.3461 794.817 83.9297 790.358 83.9297C785.081 83.9297 780.931 82.4342 777.909 79.4432C774.897 76.3793 773.705 72.4764 774.335 67.7346C775.187 61.315 778.768 56.172 785.078 52.3056C791.463 48.4392 798.818 46.506 807.142 46.506H810.71L811.015 44.2081C811.46 40.8523 810.842 38.2261 809.162 36.3294C807.491 34.3597 805.317 33.3749 802.642 33.3749C800.263 33.3749 798.137 33.995 796.263 35.2351C794.463 36.4753 793.326 38.8827 792.852 42.4573H778.358C779.123 36.6942 781.832 32.2442 786.485 29.1073C791.138 25.9704 797.032 24.402 804.167 24.402C811.748 24.402 817.261 26.2622 820.707 29.9827C824.236 33.6302 825.59 38.5544 824.767 44.7552L819.669 83.1637H805.956L806.464 79.3338ZM809.475 55.8072C803.474 55.6613 798.559 56.5732 794.73 58.5429C790.901 60.5125 788.759 63.2117 788.304 66.6404C787.917 69.5584 788.357 71.5645 789.624 72.6588C790.9 73.6801 792.431 74.1908 794.214 74.1908C797.336 74.1908 800.385 73.06 803.361 70.7986C806.411 68.5371 808.149 65.8014 808.575 62.5916L809.475 55.8072Z"
        fill={color}
      />
    </svg>
  );
}

export function MenuHamburger({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20H68M12 40H68M12 60H68"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Instagram({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.86 6.26403C36.552 6.04803 38.048 6.00003 50 6.00003C61.952 6.00003 63.448 6.05203 68.136 6.26403C72.824 6.47603 76.024 7.22403 78.824 8.30803C81.756 9.41603 84.416 11.148 86.616 13.388C88.856 15.584 90.584 18.24 91.688 21.176C92.776 23.976 93.52 27.176 93.736 31.856C93.952 36.556 94 38.052 94 50C94 61.952 93.948 63.448 93.736 68.14C93.524 72.82 92.776 76.02 91.688 78.82C90.584 81.7564 88.8531 84.4168 86.616 86.616C84.416 88.856 81.756 90.584 78.824 91.688C76.024 92.776 72.824 93.52 68.144 93.736C63.448 93.952 61.952 94 50 94C38.048 94 36.552 93.948 31.86 93.736C27.18 93.524 23.98 92.776 21.18 91.688C18.2437 90.5839 15.5833 88.8531 13.384 86.616C11.1455 84.4187 9.41326 81.7596 8.308 78.824C7.224 76.024 6.48 72.824 6.264 68.144C6.048 63.444 6 61.948 6 50C6 38.048 6.052 36.552 6.264 31.864C6.476 27.176 7.224 23.976 8.308 21.176C9.41489 18.2404 11.1485 15.5813 13.388 13.384C15.5842 11.146 18.2419 9.4138 21.176 8.30803C23.976 7.22403 27.176 6.48003 31.856 6.26403H31.86ZM67.78 14.184C63.14 13.972 61.748 13.928 50 13.928C38.252 13.928 36.86 13.972 32.22 14.184C27.928 14.38 25.6 15.096 24.048 15.7C21.996 16.5 20.528 17.448 18.988 18.988C17.5282 20.4082 16.4047 22.1372 15.7 24.048C15.096 25.6 14.38 27.928 14.184 32.22C13.972 36.86 13.928 38.252 13.928 50C13.928 61.748 13.972 63.14 14.184 67.78C14.38 72.072 15.096 74.4 15.7 75.952C16.404 77.86 17.528 79.592 18.988 81.012C20.408 82.472 22.14 83.596 24.048 84.3C25.6 84.904 27.928 85.62 32.22 85.816C36.86 86.028 38.248 86.072 50 86.072C61.752 86.072 63.14 86.028 67.78 85.816C72.072 85.62 74.4 84.904 75.952 84.3C78.004 83.5 79.472 82.552 81.012 81.012C82.472 79.592 83.596 77.86 84.3 75.952C84.904 74.4 85.62 72.072 85.816 67.78C86.028 63.14 86.072 61.748 86.072 50C86.072 38.252 86.028 36.86 85.816 32.22C85.62 27.928 84.904 25.6 84.3 24.048C83.5 21.996 82.552 20.528 81.012 18.988C79.5917 17.5283 77.8628 16.4049 75.952 15.7C74.4 15.096 72.072 14.38 67.78 14.184ZM44.38 63.564C47.5186 64.8706 51.0135 65.0469 54.2677 64.0629C57.5219 63.0789 60.3336 60.9957 62.2224 58.169C64.1113 55.3423 64.9602 51.9475 64.6242 48.5644C64.2882 45.1814 62.788 42.0199 60.38 39.62C58.8449 38.0859 56.9888 36.9113 54.9453 36.1806C52.9018 35.45 50.7217 35.1815 48.562 35.3945C46.4022 35.6075 44.3166 36.2967 42.4552 37.4126C40.5938 38.5284 39.003 40.043 37.7972 41.8474C36.5914 43.6519 35.8008 45.7012 35.4821 47.8479C35.1634 49.9946 35.3246 52.1852 35.9542 54.2621C36.5837 56.339 37.6659 58.2505 39.1229 59.8589C40.5798 61.4674 42.3753 62.7328 44.38 63.564ZM34.008 34.008C36.1081 31.9079 38.6013 30.242 41.3452 29.1055C44.0891 27.9689 47.03 27.3839 50 27.3839C52.97 27.3839 55.9109 27.9689 58.6548 29.1055C61.3987 30.242 63.8919 31.9079 65.992 34.008C68.0921 36.1081 69.758 38.6013 70.8946 41.3452C72.0311 44.0891 72.6161 47.03 72.6161 50C72.6161 52.97 72.0311 55.9109 70.8946 58.6548C69.758 61.3988 68.0921 63.8919 65.992 65.992C61.7507 70.2334 55.9982 72.6161 50 72.6161C44.0018 72.6161 38.2493 70.2334 34.008 65.992C29.7667 61.7507 27.3839 55.9982 27.3839 50C27.3839 44.0019 29.7667 38.2494 34.008 34.008ZM77.632 30.752C78.1524 30.2611 78.569 29.6708 78.8572 29.0159C79.1454 28.3611 79.2992 27.6551 79.3097 26.9398C79.3201 26.2244 79.1869 25.5142 78.9179 24.8513C78.649 24.1883 78.2497 23.5861 77.7438 23.0802C77.238 22.5743 76.6357 22.1751 75.9728 21.9061C75.3098 21.6371 74.5996 21.5039 73.8843 21.5144C73.1689 21.5248 72.4629 21.6786 71.8081 21.9668C71.1533 22.255 70.5629 22.6716 70.072 23.192C69.1172 24.2041 68.5945 25.5485 68.6148 26.9398C68.6351 28.331 69.1968 29.6595 70.1806 30.6434C71.1645 31.6273 72.493 32.1889 73.8843 32.2092C75.2755 32.2295 76.6199 31.7068 77.632 30.752Z"
        fill={color}
      />
    </svg>
  );
}

export function Close({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2426 16L64.033 64.7904M15 64.7904L63.7904 16"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RouteIndicator({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size / 5}
      viewBox="0 0 79 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display="block"
    >
      <path
        d="M1 7.36895C1 7.36895 29 -2.55012 77.5 2.369"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedIn({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.7175 7.31429H11.2825C9.09166 7.31429 7.31429 9.09166 7.31429 11.2825V52.7175C7.31429 54.9083 9.09166 56.6857 11.2825 56.6857H52.7175C54.9083 56.6857 56.6857 54.9083 56.6857 52.7175V11.2825C56.6857 9.09166 54.9083 7.31429 52.7175 7.31429ZM52.7175 52.736C25.0818 52.7298 11.264 52.7237 11.264 52.7175C11.2702 25.0818 11.2763 11.264 11.2825 11.264C38.9182 11.2702 52.736 11.2763 52.736 11.2825C52.7298 38.9182 52.7237 52.736 52.7175 52.736ZM14.6336 25.8224H21.9591V49.3849H14.6336V25.8224ZM18.2994 22.6009C20.6384 22.6009 22.5454 20.7001 22.5454 18.355C22.5454 17.7974 22.4355 17.2453 22.2222 16.7301C22.0088 16.215 21.696 15.7469 21.3018 15.3526C20.9075 14.9584 20.4394 14.6456 19.9243 14.4322C19.4091 14.2189 18.857 14.109 18.2994 14.109C17.7418 14.109 17.1897 14.2189 16.6746 14.4322C16.1594 14.6456 15.6914 14.9584 15.2971 15.3526C14.9028 15.7469 14.5901 16.215 14.3767 16.7301C14.1633 17.2453 14.0535 17.7974 14.0535 18.355C14.0473 20.7001 15.9481 22.6009 18.2994 22.6009ZM33.8699 37.7271C33.8699 34.6537 34.4562 31.6791 38.264 31.6791C42.0162 31.6791 42.0718 35.1906 42.0718 37.9246V49.3849H49.3911V36.4619C49.3911 30.1177 48.021 25.2361 40.6091 25.2361C37.0482 25.2361 34.6599 27.1925 33.6786 29.0439H33.5799V25.8224H26.5506V49.3849H33.8699V37.7271Z"
        fill={color}
      />
    </svg>
  );
}

export function Facebook({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.7109 7.31429H9.28914C8.1968 7.31429 7.31429 8.1968 7.31429 9.28914V54.7109C7.31429 55.8032 8.1968 56.6857 9.28914 56.6857H54.7109C55.8032 56.6857 56.6857 55.8032 56.6857 54.7109V9.28914C56.6857 8.1968 55.8032 7.31429 54.7109 7.31429ZM52.736 52.736H41.3744V37.5666H47.7927L48.7554 30.1177H41.3744V25.3595C41.3744 23.1995 41.973 21.7307 45.0649 21.7307H49.0085V15.0656C48.3234 14.973 45.9845 14.7694 43.2567 14.7694C37.5666 14.7694 33.6725 18.2439 33.6725 24.619V30.1115H27.2418V37.5605H33.6786V52.736H11.264V11.264H52.736V52.736Z"
        fill={color}
      />
    </svg>
  );
}

export function Email({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1667 5.8335H5.83341C4.22925 5.8335 2.93133 7.146 2.93133 8.75016L2.91675 26.2502C2.91675 27.8543 4.22925 29.1668 5.83341 29.1668H29.1667C30.7709 29.1668 32.0834 27.8543 32.0834 26.2502V8.75016C32.0834 7.146 30.7709 5.8335 29.1667 5.8335ZM29.1667 11.6668L17.5001 18.9585L5.83341 11.6668V8.75016L17.5001 16.0418L29.1667 8.75016V11.6668Z"
        fill={color}
      />
    </svg>
  );
}

export function Phone({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.6689 42.9561L45.1466 38.4765C45.7497 37.8807 46.5127 37.4728 47.343 37.3024C48.1734 37.132 49.0353 37.2064 49.8242 37.5166L55.2814 39.6964C56.0786 40.0201 56.7622 40.5727 57.246 41.2844C57.7298 41.9962 57.9921 42.8353 58 43.696V53.6949C57.9954 54.2804 57.8723 54.8589 57.6383 55.3955C57.4043 55.9322 57.0642 56.416 56.6383 56.8177C56.2125 57.2194 55.7099 57.5307 55.1606 57.7329C54.6113 57.9352 54.0269 58.0241 53.4423 57.9944C15.2019 55.6147 7.48587 23.2182 6.02662 10.8196C5.95888 10.2107 6.02077 9.59439 6.20822 9.01117C6.39568 8.42796 6.70444 7.89106 7.1142 7.4358C7.52396 6.98053 8.02543 6.61722 8.58563 6.36977C9.14582 6.12231 9.75204 5.99632 10.3644 6.00008H20.0195C20.881 6.00263 21.7221 6.26299 22.4346 6.74766C23.1471 7.23233 23.6983 7.91915 24.0174 8.71979L26.1963 14.1792C26.5166 14.9652 26.5984 15.8283 26.4313 16.6605C26.2642 17.4928 25.8557 18.2573 25.2568 18.8587L20.7791 23.3382C20.7791 23.3382 23.3577 40.7963 40.6689 42.9561Z"
        fill={color}
      />
    </svg>
  );
}

export function ListArrow({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.4092 42.3529L12.2229 21.3394C11.7541 20.8259 12.1184 20 12.8137 20H51.1863C51.8816 20 52.2459 20.8259 51.7771 21.3394L32.5908 42.3529C32.2736 42.7004 31.7264 42.7004 31.4092 42.3529Z"
        fill={color}
      />
    </svg>
  );
}

export function Tiktok({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.5356 24.8201C77.9438 24.5131 77.3677 24.1766 76.8094 23.8118C75.1859 22.7347 73.6973 21.4655 72.3759 20.0316C69.0695 16.235 67.8346 12.3833 67.3797 9.68665H67.398C67.018 7.44826 67.1751 6 67.1989 6H52.1392V64.4401C52.1392 65.2247 52.1392 66.0002 52.1063 66.7665C52.1063 66.8618 52.0972 66.9498 52.0917 67.0525C52.0917 67.0946 52.0917 67.1386 52.0826 67.1826V67.2156C51.9239 69.3124 51.2541 71.338 50.1322 73.1141C49.0103 74.8901 47.4707 76.3623 45.6488 77.4011C43.75 78.4852 41.6024 79.0539 39.4178 79.051C32.4013 79.051 26.7146 73.3093 26.7146 66.2183C26.7146 59.1273 32.4013 53.3856 39.4178 53.3856C40.746 53.3844 42.066 53.5942 43.3288 54.0071L43.3471 38.6189C39.5134 38.1219 35.6187 38.4277 31.9087 39.5169C28.1987 40.6061 24.7539 42.4551 21.7915 44.9472C19.1959 47.2105 17.0137 49.9111 15.3431 52.9273C14.7074 54.0273 12.3089 58.4472 12.0185 65.6207C11.8358 69.6923 13.0542 73.9106 13.6351 75.654V75.6907C14.0005 76.7173 15.4162 80.2206 17.7234 83.174C19.5838 85.543 21.7818 87.6241 24.2467 89.3502V89.3135L24.2832 89.3502C31.5737 94.3219 39.6571 93.9956 39.6571 93.9956C41.0564 93.9388 45.7438 93.9956 51.0669 91.4639C56.971 88.6572 60.3322 84.4756 60.3322 84.4756C62.4795 81.977 64.1869 79.1296 65.3813 76.0555C66.744 72.4605 67.1989 68.1487 67.1989 66.4255V35.4217C67.3816 35.5317 69.8148 37.1468 69.8148 37.1468C69.8148 37.1468 73.3203 39.4017 78.7896 40.8701C82.7134 41.915 88 42.135 88 42.135V27.1318C86.1477 27.3334 82.3864 26.7468 78.5356 24.8201Z"
        fill={color}
      />
    </svg>
  );
}

export function Bandcamp({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 6C25.6935 6 6 25.6935 6 50C6 74.3064 25.6935 94 50 94C74.3064 94 94 74.3064 94 50C94 25.6935 74.3064 6 50 6ZM58.5516 63.8564H26.4387L41.4661 36.1613H73.579L58.5516 63.8564Z"
        fill={color}
      />
    </svg>
  );
}

export function Spotify({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.4815 6C25.9545 6 6 25.9583 6 50.4852C6 75.0343 25.9545 95 50.4815 95C75.0306 95 95 75.0306 95 50.4852C95 25.9583 75.0306 6 50.4815 6ZM27.9088 66.8315C33.0019 65.2713 38.298 64.474 43.6247 64.4656C52.5767 64.4656 61.4136 66.7351 69.1826 71.0293C69.6461 71.2815 70.0652 72.1122 70.258 73.1505C70.4434 74.1888 70.3692 75.2531 70.0652 75.8057C69.9219 76.0685 69.7278 76.3003 69.4943 76.4875C69.2607 76.6748 68.9924 76.8139 68.7047 76.8967C68.417 76.9794 68.1158 77.0043 67.8184 76.9698C67.521 76.9353 67.2335 76.8421 66.9724 76.6957C61.266 73.5652 54.9891 71.6128 48.5138 70.9541C42.0386 70.2954 35.497 70.944 29.2772 72.8613C28.9917 72.9536 28.6906 72.9882 28.3916 72.963C28.0926 72.9378 27.8015 72.8534 27.5354 72.7147C27.2693 72.576 27.0335 72.3857 26.8417 72.1549C26.6498 71.9241 26.5059 71.6575 26.4181 71.3705C26.0213 70.0726 26.8408 67.1801 27.9088 66.8315ZM25.9694 50.4407C31.723 48.8776 37.6588 48.0857 43.621 48.0859C54.353 48.0859 65.007 50.6817 74.4373 55.599C75.1011 55.9327 75.5869 56.5038 75.8094 57.201C75.9219 57.553 75.9627 57.924 75.9296 58.2922C75.8965 58.6603 75.79 59.018 75.6165 59.3444C74.7747 60.9909 73.7883 62.0997 73.169 62.0997C72.7172 62.0977 72.2724 61.9884 71.8711 61.7807C63.1536 57.2295 53.4588 54.8697 43.6247 54.9055C38.1547 54.8945 32.7084 55.6243 27.4342 57.0749C27.0823 57.1711 26.715 57.197 26.3531 57.1512C25.9912 57.1054 25.6419 56.9888 25.3251 56.808C25.0083 56.6272 24.7302 56.3858 24.5067 56.0976C24.2832 55.8093 24.1187 55.4798 24.0225 55.128C23.6072 53.5631 24.5602 50.8263 25.9694 50.4407ZM25.4688 39.7384C25.0514 39.8455 24.6169 39.8689 24.1904 39.8073C23.7639 39.7456 23.3539 39.6 22.9839 39.379C22.614 39.158 22.2915 38.866 22.035 38.5196C21.7785 38.1733 21.5932 37.7797 21.4897 37.3614C21.0336 35.5146 22.1869 33.3712 23.863 32.9485C30.3285 31.356 36.9623 30.5479 43.621 30.5417C56.4148 30.5417 68.6745 33.4194 80.0517 39.0969C80.8334 39.4856 81.4288 40.1688 81.7069 40.9963C81.9851 41.8238 81.9232 42.7279 81.535 43.5098C81.0047 44.5778 79.8552 45.7274 78.5869 45.7274C78.0896 45.7255 77.5986 45.6154 77.1481 45.4048C66.7446 40.1858 55.2601 37.4852 43.621 37.5208C37.5579 37.5208 31.4503 38.2662 25.4688 39.7384Z"
        fill={color}
      />
    </svg>
  );
}

export function Youtube({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M94.0799 27.9975C93.5562 26.0615 92.5294 24.2961 91.1022 22.8778C89.6751 21.4595 87.8976 20.4382 85.9478 19.9159C78.7705 18 50 18 50 18C50 18 21.2295 18 14.0522 19.9057C12.1015 20.4263 10.3232 21.4471 8.89577 22.8656C7.46835 24.2842 6.4421 26.0505 5.92009 27.9873C4 35.121 4 50 4 50C4 50 4 64.879 5.92009 72.0026C6.97768 75.9363 10.0991 79.0344 14.0522 80.0841C21.2295 82 50 82 50 82C50 82 78.7705 82 85.9478 80.0841C89.9112 79.0344 93.0223 75.9363 94.0799 72.0026C96 64.879 96 50 96 50C96 50 96 35.121 94.0799 27.9975ZM40.8616 63.6561V36.3439L64.683 49.8981L40.8616 63.6561Z"
        fill={color}
      />
    </svg>
  );
}
