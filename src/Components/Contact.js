import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='h-full 2xl:h-screen bg-zinc-900 flex flex-col xl:flex-row items-center justify-center xl:px-20'>

        <div className='flex flex-col w-full lg:mr-20 xl:w-3/5 min'>
          <h1 className='lg:text-7xl text-5xl text-white text-center pt-20 my-10 xl:mt-0'>Contact Me</h1>

          <form action="https://formsubmit.co/WillifordD21@students.ecu.edu" method='POST' className='w-full flex flex-col items-center justify-center'>
              <input type="text" placeholder='Your Name' name="Name" required className='m-3 w-11/12 lg:w-2/3 bg-zinc-900 border rounded-md p-4 text-white'></input>
              <input type="email" placeholder='Email Address' name="Email" required className='m-3 w-11/12 lg:w-2/3 bg-zinc-900 border rounded-md p-4 text-white'></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name='_next' value='https://davidwilliford99.github.io/PersonalSite/#/ThankYou'></input>
              <textarea type="text"  rows="5" cols="10" placeholder="Write your message here" name="message" required className='m-3 w-11/12 lg:w-2/3 bg-zinc-900 border rounded-md p-4 text-white'></textarea>
              <button type='submit' className='text-white text-center text-sm font-semibold px-10 mb-10 py-4 rounded-lg bg-yellow-600 duration-500 hover:bg-violet-500 mx-5 mt-8'>Send Email</button>
          </form>

          {/* TODO: Add a way to thank the person once they send the email */}
          </div>

        <div className='w-1/2 lg:w-2/5 my-20 xl:my-0'>
          <svg  className='min-h-fit' viewBox="0 0 704 574" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_envelope_re_f5j4 1" clip-path="url(#clip0_1_2)">
              <g id="right-leaf">
              <path id="Path 461" d="M206.298 540.321C208.984 542.873 212.282 544.69 215.874 545.597C219.466 546.504 223.231 546.471 226.807 545.5C235.971 542.899 242.19 534.631 247.71 526.867L264.044 503.908L250.279 506.432C240.379 508.247 230.235 510.152 221.614 515.346C212.993 520.54 206.088 529.812 206.634 539.862" fill="#E6E6E6"/>
              <path id="Path 462" d="M193.503 571.25C195.917 563.018 198.345 554.675 202.607 547.173C206.393 540.511 211.565 534.665 218.389 531.031C222.008 529.107 225.935 527.83 229.994 527.256C231.052 527.106 231.225 528.753 230.171 528.903C223.145 529.907 216.618 533.116 211.533 538.069C205.896 543.584 202.199 550.694 199.465 558.012C197.81 562.437 196.475 566.97 195.146 571.503C195.106 571.717 194.986 571.908 194.811 572.037C194.635 572.166 194.416 572.223 194.2 572.196C193.983 572.161 193.789 572.043 193.659 571.866C193.529 571.689 193.475 571.468 193.507 571.25L193.503 571.25Z" fill="#F2F2F2"/>
              </g>
              <path id="Vector" d="M459.314 239.738C460.883 239.36 462.515 239.33 464.097 239.651C465.679 239.973 467.17 240.637 468.468 241.597C469.765 242.557 470.836 243.79 471.605 245.208C472.374 246.627 472.823 248.197 472.919 249.808L510.684 260.424L495.275 273.77L461.775 261.642C459.058 261.626 456.442 260.613 454.422 258.795C452.402 256.978 451.119 254.483 450.815 251.783C450.512 249.083 451.209 246.366 452.776 244.146C454.342 241.926 456.669 240.357 459.314 239.738L459.314 239.738Z" fill="#FFB7B7"/>
              <path id="Vector_2" d="M556.357 561.294L545.349 561.293L540.112 518.835L556.359 518.836L556.357 561.294Z" fill="#FFB7B7"/>
              <path id="Vector_3" d="M559.164 571.964L523.671 571.963V571.514C523.671 567.85 525.126 564.336 527.717 561.746C530.308 559.155 533.822 557.699 537.486 557.699H537.487L559.165 557.7L559.164 571.964Z" fill="#2F2E41"/>
              <path id="Vector_4" d="M620.859 561.294L609.851 561.293L604.614 518.835L620.86 518.836L620.859 561.294Z" fill="#FFB7B7"/>
              <path id="Vector_5" d="M623.666 571.964L588.172 571.963V571.514C588.173 567.85 589.628 564.336 592.219 561.746C594.81 559.155 598.323 557.699 601.987 557.699H601.988L623.667 557.7L623.666 571.964Z" fill="#2F2E41"/>
              <path id="Vector_6" d="M547.363 317.603L531.148 429.917L535.188 548.251L559.537 550.19L567.151 444.067L586.533 384.893L597.928 469.245L598.396 548.251L623.539 550.19L632.308 384.09L625.858 311.854L547.363 317.603Z" fill="#2F2E41"/>
              <path id="Vector_7" d="M578.451 181.182L550.132 323.847C550.132 323.847 597.81 337.531 618.697 324.898C639.584 312.266 630.224 273.268 630.224 273.268L626.399 206.91L619.33 190.129L613.332 176.277L578.451 181.182Z" fill="#CBCBCB"/>
              <path id="Vector_8" d="M570.161 282.449L579.944 178.412L572.12 184.124L544.767 193.007L542.895 266.253L523.76 362.573C523.76 362.573 537.437 389.261 554.387 345.109L570.161 282.449Z" fill="#2F2E41"/>
              <path id="Vector_9" d="M557.931 203.962L544.767 193.007L515.18 257.279L482.164 250.047L480.604 269.546L528.44 288.477L561.038 243.095L557.931 203.962Z" fill="#2F2E41"/>
              <path id="Vector_10" d="M609.144 259.677L612.831 175.005L626.399 185.512L650.63 192.266L647.077 259.677L652.19 364.277L626.786 372.323L619.655 306.32L609.144 259.677Z" fill="#2F2E41"/>
              <path id="Vector_11" d="M610.774 327.837C611.059 326.248 611.688 324.741 612.617 323.422C613.547 322.103 614.754 321.004 616.155 320.202C617.555 319.4 619.114 318.915 620.723 318.78C622.331 318.646 623.949 318.866 625.463 319.425L650.359 289.11L656.388 308.583L631.822 334.385C630.714 336.866 628.735 338.855 626.26 339.975C623.784 341.094 620.984 341.267 618.389 340.46C615.795 339.652 613.587 337.922 612.183 335.595C610.78 333.269 610.279 330.508 610.774 327.837V327.837Z" fill="#FFB7B7"/>
              <path id="Vector_12" d="M634.407 201.665L650.63 192.266L691.451 272.878L651.652 328.143L628.952 309.993L656.516 274.048L631.394 235.44L634.407 201.665Z" fill="#2F2E41"/>
              <g id="head">
              <path id="Vector_13" d="M594.261 167.229C608.428 167.229 619.913 155.745 619.913 141.578C619.913 127.411 608.428 115.926 594.261 115.926C580.095 115.926 568.61 127.411 568.61 141.578C568.61 155.745 580.095 167.229 594.261 167.229Z" fill="#FFB7B7"/>
              <path id="Vector_14" d="M618.387 121.071L619.631 118.568L613.373 115.459C613.373 115.459 606.47 104.227 593.979 107.384C581.489 110.54 575.869 112.429 575.869 112.429L569.627 115.569L572.76 118.686L567.14 120.575L570.894 122.441L566.526 124.951L568.878 137.823C568.878 137.823 572.783 128.06 580.292 131.791C587.801 135.522 601.536 129.862 601.536 129.862L613.468 152.955C613.468 152.955 615.93 144.86 620.318 147.019C620.319 147.019 631.531 129.162 618.387 121.071Z" fill="#2F2E41"/>
              </g>
              <path id="Vector_15" d="M462.572 158.704H462.408L368.337 198.873L239.628 253.833C239.125 254.044 238.586 254.155 238.04 254.158C237.495 254.16 236.954 254.056 236.449 253.849L103.659 198.758L7.27666 158.77L7.12944 158.704H6.96536C5.44459 158.706 3.98661 159.311 2.91127 160.386C1.83593 161.462 1.23106 162.92 1.22937 164.44V413.549C1.23107 415.07 1.83593 416.528 2.91127 417.603C3.98661 418.679 5.4446 419.284 6.96536 419.285H462.572C464.093 419.284 465.551 418.679 466.627 417.603C467.702 416.528 468.307 415.07 468.308 413.549V164.44C468.307 162.92 467.702 161.462 466.627 160.386C465.551 159.311 464.093 158.706 462.572 158.704V158.704Z" fill="white"/>
              <path id="Vector_16" d="M462.981 160.343C462.814 160.343 462.651 160.292 462.514 160.196L235.891 2.36985C235.201 1.89178 234.382 1.63629 233.543 1.63772C232.704 1.63915 231.885 1.89743 231.197 2.37785L6.20666 160.195C6.02869 160.319 5.80858 160.368 5.59469 160.33C5.3808 160.293 5.19061 160.172 5.0659 159.994C4.94118 159.816 4.89214 159.596 4.92955 159.382C4.96695 159.168 5.08773 158.978 5.26538 158.853L230.256 1.03591C231.219 0.363441 232.365 0.00193844 233.54 7.77385e-06C234.715 -0.0019229 235.862 0.355807 236.828 1.02511L463.45 158.851C463.594 158.951 463.701 159.094 463.757 159.259C463.814 159.424 463.816 159.603 463.764 159.769C463.711 159.936 463.607 160.081 463.467 160.184C463.326 160.288 463.156 160.343 462.981 160.343L462.981 160.343Z" fill="#3F3D56"/>
              <path id="Vector_17" d="M19.063 165.938L233.765 6.81699L450.097 177.26L244.827 298.946L133.384 273.544L19.063 165.938Z" fill="#E6E6E6"/>
              <path id="Vector_18" d="M142.792 374.107H36.7232C36.0719 374.109 35.4266 373.982 34.8243 373.734C34.2219 373.487 33.6743 373.122 33.2127 372.663C32.7512 372.203 32.3847 371.657 32.1344 371.056C31.884 370.455 31.7547 369.81 31.7537 369.159C31.7528 368.507 31.8802 367.862 32.1288 367.26C32.3774 366.658 32.7422 366.111 33.2024 365.65C33.6626 365.189 34.2091 364.824 34.8107 364.574C35.4124 364.324 36.0573 364.196 36.7086 364.196H142.792C143.443 364.194 144.088 364.321 144.69 364.568C145.293 364.816 145.84 365.18 146.302 365.64C146.764 366.099 147.13 366.645 147.38 367.247C147.631 367.848 147.76 368.493 147.761 369.144C147.762 369.795 147.635 370.44 147.386 371.043C147.137 371.645 146.773 372.192 146.312 372.653C145.852 373.114 145.306 373.479 144.704 373.729C144.102 373.978 143.457 374.107 142.806 374.107H142.792Z" fill="#6C63FF"/>
              <path id="Vector_19" d="M74.7781 352.801H36.7232C36.0719 352.803 35.4266 352.677 34.8242 352.429C34.2218 352.181 33.6742 351.817 33.2127 351.358C32.7511 350.898 32.3847 350.352 32.1343 349.751C31.884 349.149 31.7546 348.505 31.7537 347.853C31.7527 347.202 31.8802 346.557 32.1287 345.955C32.3773 345.353 32.7421 344.806 33.2023 344.345C33.6625 343.884 34.2091 343.518 34.8107 343.269C35.4123 343.019 36.0572 342.891 36.7086 342.891H74.7781C76.0912 342.89 77.3507 343.411 78.2799 344.339C79.2092 345.267 79.7322 346.526 79.7342 347.839C79.7361 349.152 79.2168 350.412 78.2903 351.342C77.3639 352.273 76.1059 352.798 74.7928 352.801H74.7781Z" fill="#6C63FF"/>
              <path id="Vector_20" d="M461.343 158.704H461.179L367.108 198.873L238.399 253.833C237.896 254.044 237.356 254.155 236.811 254.158C236.265 254.16 235.724 254.056 235.219 253.849L102.43 198.758L6.04738 158.77L5.90016 158.704H5.73599C4.21522 158.706 2.75724 159.311 1.6819 160.386C0.60656 161.462 0.0016913 162.92 0 164.44V413.549C0.0016913 415.07 0.60656 416.528 1.6819 417.603C2.75724 418.679 4.21522 419.284 5.73599 419.285H461.343C462.864 419.284 464.322 418.679 465.397 417.603C466.473 416.528 467.077 415.07 467.079 413.549V164.44C467.077 162.92 466.473 161.462 465.397 160.386C464.322 159.311 462.864 158.706 461.343 158.704ZM465.44 413.549C465.44 414.636 465.008 415.678 464.24 416.446C463.472 417.214 462.43 417.646 461.343 417.646H5.73599C4.64948 417.646 3.60759 417.214 2.83931 416.446C2.07103 415.678 1.63921 414.636 1.63878 413.549V164.44C1.64026 163.381 2.05125 162.363 2.78581 161.599C3.52038 160.836 4.52165 160.386 5.58034 160.343L102.43 200.528L234.589 255.365C236.019 255.947 237.622 255.938 239.046 255.341L367.108 200.651L461.507 160.343C462.564 160.389 463.563 160.84 464.295 161.603C465.028 162.366 465.438 163.383 465.44 164.44L465.44 413.549Z" fill="#3F3D56"/>
              <g id="letter">
              <path id="Vector_21" d="M236.785 254.566C235.979 254.567 235.18 254.41 234.434 254.105L102.02 199.163V27.1845C102.022 25.6638 102.627 24.2058 103.702 23.1305C104.777 22.0551 106.235 21.4502 107.756 21.4484H361.782C363.303 21.4502 364.76 22.0551 365.836 23.1305C366.911 24.2058 367.516 25.6638 367.518 27.1845V199.283L367.269 199.39L239.207 254.079C238.44 254.401 237.617 254.567 236.785 254.566V254.566Z" fill="#6C63FF"/>
              <path id="Vector_22" d="M216.17 85.7346H126.032C124.295 85.7316 122.631 85.0396 121.404 83.8105C120.177 82.5814 119.488 80.9157 119.488 79.1791C119.488 77.4424 120.177 75.7768 121.404 74.5477C122.631 73.3186 124.295 72.6266 126.032 72.6236H216.17C217.907 72.6266 219.571 73.3186 220.798 74.5477C222.025 75.7768 222.714 77.4424 222.714 79.1791C222.714 80.9157 222.025 82.5814 220.798 83.8105C219.571 85.0396 217.907 85.7316 216.17 85.7346V85.7346Z" fill="white"/>
              <path id="Vector_23" d="M169.462 57.8737H126.032C124.293 57.8737 122.626 57.183 121.397 55.9536C120.167 54.7242 119.477 53.0568 119.477 51.3182C119.477 49.5796 120.167 47.9121 121.397 46.6828C122.626 45.4534 124.293 44.7627 126.032 44.7627H169.462C171.201 44.7627 172.868 45.4534 174.098 46.6828C175.327 47.9121 176.018 49.5796 176.018 51.3182C176.018 53.0568 175.327 54.7242 174.098 55.9536C172.868 57.183 171.201 57.8737 169.462 57.8737V57.8737Z" fill="white"/>
              <path id="Vector_24" d="M302.185 151.29H164.52C162.781 151.29 161.114 150.599 159.884 149.369C158.655 148.14 157.964 146.473 157.964 144.734C157.964 142.995 158.655 141.328 159.884 140.099C161.114 138.869 162.781 138.179 164.52 138.179H302.185C303.924 138.179 305.591 138.869 306.821 140.099C308.05 141.328 308.741 142.995 308.741 144.734C308.741 146.473 308.05 148.14 306.821 149.369C305.591 150.599 303.924 151.29 302.185 151.29V151.29Z" fill="white"/>
              <path id="Vector_25" d="M302.185 181.609H164.52C163.658 181.61 162.804 181.442 162.008 181.113C161.211 180.784 160.487 180.302 159.877 179.693C159.267 179.084 158.783 178.361 158.453 177.565C158.123 176.768 157.953 175.915 157.953 175.053C157.953 174.191 158.123 173.338 158.453 172.542C158.783 171.746 159.267 171.023 159.877 170.414C160.487 169.805 161.211 169.322 162.008 168.993C162.804 168.665 163.658 168.496 164.52 168.498H302.185C303.047 168.496 303.901 168.665 304.698 168.993C305.494 169.322 306.218 169.805 306.828 170.414C307.438 171.023 307.922 171.746 308.252 172.542C308.582 173.338 308.752 174.191 308.752 175.053C308.752 175.915 308.582 176.768 308.252 177.565C307.922 178.361 307.438 179.084 306.828 179.693C306.218 180.302 305.494 180.784 304.698 181.113C303.901 181.442 303.047 181.61 302.185 181.609V181.609Z" fill="white"/>
              </g>
              <path id="Vector_26" d="M702.817 573H439.817C439.552 573 439.298 572.895 439.11 572.707C438.923 572.52 438.817 572.265 438.817 572C438.817 571.735 438.923 571.48 439.11 571.293C439.298 571.105 439.552 571 439.817 571H702.817C703.082 571 703.337 571.105 703.524 571.293C703.712 571.48 703.817 571.735 703.817 572C703.817 572.265 703.712 572.52 703.524 572.707C703.337 572.895 703.082 573 702.817 573Z" fill="#CBCBCB"/>
              <path id="Vector_27" d="M243.817 573H146.817C146.552 573 146.298 572.895 146.11 572.707C145.923 572.52 145.817 572.265 145.817 572C145.817 571.735 145.923 571.48 146.11 571.293C146.298 571.105 146.552 571 146.817 571H243.817C244.082 571 244.337 571.105 244.524 571.293C244.712 571.48 244.817 571.735 244.817 572C244.817 572.265 244.712 572.52 244.524 572.707C244.337 572.895 244.082 573 243.817 573Z" fill="#CBCBCB"/>
              <g id="left-leaf">
              <path id="Path 461_2" d="M182.484 542.082C186.188 541.997 189.807 540.959 192.994 539.069C196.181 537.179 198.827 534.501 200.677 531.291C205.341 522.985 203.92 512.737 202.359 503.339L197.75 475.542L189.77 487.039C184.031 495.307 178.182 503.811 175.732 513.573C173.282 523.335 174.925 534.779 182.398 541.519" fill="#E6E6E6"/>
              <path id="Path 462_2" d="M195.222 573.034C191.129 565.495 186.967 557.867 184.698 549.542C182.685 542.149 182.23 534.357 184.505 526.968C185.715 523.052 187.599 519.377 190.071 516.108C190.717 515.256 192 516.302 191.359 517.151C187.085 522.818 184.721 529.696 184.607 536.793C184.5 544.678 186.892 552.327 190.114 559.444C192.061 563.748 194.311 567.904 196.565 572.055C196.688 572.235 196.738 572.455 196.704 572.67C196.67 572.885 196.555 573.08 196.383 573.213C196.205 573.341 195.983 573.394 195.767 573.36C195.55 573.326 195.355 573.208 195.225 573.031L195.222 573.034Z" fill="#F2F2F2"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_1_2">
              <rect width="703.817" height="573.37" fill="white"/>
              </clipPath>
              </defs>
            </svg>
        </div>


    </div>
  );
}

export default Contact;