import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { CMS_NAME } from "../lib/constants";

export const Footer = () => {
  const year = new Date(); // evergreen copyright year
  return (
    <footer className="transition-colors dark:bg-dark-4 dark:text-gray-300 bg-gray-100 text-gray-600">
      <Container>
        <div className="flex flex-col md:flex-row items-center mb-2">
          <div className="mb-4 md:mr-8 md:mb-0">
            <Image
              src="/assets/blog/authors/dan.jpeg"
              alt={CMS_NAME}
              width={85}
              height={85}
              layout="fixed"
              className="rounded-full"
            />
          </div>
          <div className="text-center md:text-left text-xl md:text-2xl">
            I love building things. Family man, technologist and Hacker News
            aficionado. Eternally curious.
          </div>
        </div>
        {/* 
            Bottom Section
        */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between font-light text-xs">
          <div className="flex items-center order-2 md:order-1 dark:text-gray-400">
            Crafted with ♥️ in California.&nbsp;&copy;&nbsp;
            {year.getFullYear()}, Dan Stroot.
          </div>
          {/* <div className="flex items-center text-xs font-medium dark:text-gray-400 hover:underline">
            <Link
              href="/archive"
              className="font-medium dark:text-gray-400 hover:underline hover:text-gray-500"
            >
              <a>Post Archive</a>
            </Link>
          </div> */}
          <div className="flex items-center space-x-2 order-1 md:order-2 mb-3 md:mb-0">
            <a
              className="p-2 hover:text-gray-500"
              href="https://twitter.com/danstroot"
            >
              <span className="sr-only">Dan Stroot on Twitter</span>
              <svg
                role="img"
                aria-hidden="true"
                width="24"
                height="20"
                className="fill-current"
              >
                <path d="M16.0411 0.261162V0.256836H17.1657L17.5767 0.339022C17.8506 0.392378 18.0994 0.462301 18.3228 0.548813C18.5463 0.635325 18.7626 0.736263 18.9717 0.851605C19.1807 0.966946 19.3704 1.08447 19.5405 1.20414C19.7092 1.32238 19.8606 1.44782 19.9947 1.58047C20.1273 1.71456 20.3342 1.74916 20.6154 1.68428C20.8966 1.6194 21.1994 1.52927 21.5238 1.41393C21.8482 1.29859 22.169 1.16882 22.4862 1.02463C22.8034 0.880435 22.9967 0.788884 23.0659 0.749953C23.1336 0.709595 23.1697 0.687968 23.174 0.685069L23.1783 0.678581L23.1999 0.667767L23.2216 0.656953L23.2432 0.646139L23.2648 0.635325L23.2691 0.628837L23.2756 0.624511L23.2821 0.620185L23.2864 0.613697L23.3081 0.607209L23.3297 0.602883L23.3254 0.635325L23.3189 0.667767L23.3081 0.700209L23.2973 0.732651L23.2864 0.754279L23.2756 0.775907L23.2648 0.808349C23.2576 0.829977 23.2504 0.858807 23.2432 0.894861C23.236 0.930914 23.1675 1.07509 23.0377 1.32742C22.908 1.57975 22.7457 1.83568 22.5511 2.09521C22.3564 2.35475 22.182 2.55083 22.0277 2.68349C21.872 2.81759 21.7689 2.9113 21.7184 2.96466C21.668 3.01944 21.6067 3.0699 21.5346 3.11605L21.4264 3.18742L21.4048 3.19824L21.3832 3.20905L21.3789 3.21554L21.3724 3.21987L21.3659 3.22419L21.3616 3.23068L21.3399 3.24149L21.3183 3.25231L21.314 3.2588L21.3075 3.26312L21.301 3.26745L21.2967 3.27394L21.2924 3.28042L21.2859 3.28475L21.2794 3.28907L21.275 3.29556H21.3832L21.9888 3.1658C22.3925 3.07928 22.7782 2.97476 23.1459 2.85219L23.7298 2.65754L23.7947 2.63591L23.8271 2.6251L23.8488 2.61428L23.8704 2.60347L23.892 2.59265L23.9137 2.58184L23.9569 2.57535L24.0002 2.57103V2.61428L23.9894 2.61861L23.9785 2.6251L23.9742 2.63159L23.9677 2.63591L23.9612 2.64024L23.9569 2.64672L23.9526 2.65321L23.9461 2.65754L23.9396 2.66186L23.9353 2.66835L23.931 2.67484L23.9245 2.67917L23.9137 2.70079L23.9028 2.72242L23.8964 2.72675C23.8935 2.73107 23.8019 2.85362 23.6217 3.09442C23.4415 3.33666 23.3441 3.4592 23.3297 3.4621C23.3153 3.46642 23.2951 3.48805 23.2691 3.52698C23.2446 3.56734 23.0918 3.72812 22.8106 4.00929C22.5295 4.29045 22.2541 4.5406 21.9845 4.75978C21.7134 4.98038 21.5764 5.25144 21.5735 5.57299C21.5692 5.89308 21.5526 6.255 21.5238 6.65871C21.4949 7.06244 21.4409 7.49859 21.3616 7.9672C21.2823 8.43581 21.1597 8.9657 20.9939 9.55686C20.8281 10.148 20.6262 10.7248 20.3883 11.2871C20.1504 11.8494 19.9017 12.3541 19.6421 12.801C19.3826 13.248 19.1447 13.6265 18.9284 13.9365C18.7121 14.2465 18.4923 14.5385 18.2688 14.8124C18.0453 15.0864 17.7627 15.395 17.421 15.7381C17.0778 16.0798 16.8904 16.2673 16.8586 16.3004C16.8255 16.3322 16.6842 16.4504 16.4347 16.6551C16.1867 16.8613 15.92 17.0675 15.6345 17.2737C15.3504 17.4785 15.0895 17.6493 14.8515 17.7863C14.6136 17.9233 14.3267 18.0797 13.9908 18.2556C13.6563 18.433 13.2943 18.5973 12.905 18.7487C12.5157 18.9001 12.1048 19.0407 11.6722 19.1705C11.2397 19.3002 10.8215 19.4012 10.4178 19.4733C10.0141 19.5454 9.55631 19.6066 9.04444 19.6571L8.27665 19.7328V19.7436H6.87083V19.7328L6.68699 19.722C6.56445 19.7148 6.46351 19.7076 6.3842 19.7004C6.30491 19.6932 6.00571 19.6535 5.48664 19.5814C4.96757 19.5093 4.56025 19.4372 4.26466 19.3651C3.9691 19.293 3.52931 19.1561 2.94536 18.9542C2.3614 18.7523 1.8618 18.5483 1.44654 18.3421C1.03273 18.1374 0.773198 18.0076 0.667935 17.9528C0.564121 17.8995 0.44733 17.8332 0.317562 17.7538L0.12291 17.6349L0.118606 17.6284L0.112096 17.6241L0.105608 17.6198L0.101282 17.6133L0.0796544 17.6025L0.0580264 17.5916L0.0537225 17.5852L0.0472124 17.5808L0.0407241 17.5765L0.0363985 17.57L0.0320945 17.5635L0.0255845 17.5592H0.0147705V17.5159L0.0363985 17.5203L0.0580264 17.5268L0.155352 17.5376C0.220236 17.5448 0.396872 17.5556 0.685237 17.57C0.973624 17.5844 1.28001 17.5844 1.60443 17.57C1.92884 17.5556 2.26049 17.5231 2.59931 17.4727C2.93816 17.4222 3.33827 17.3357 3.79966 17.2132C4.26107 17.0906 4.68498 16.945 5.07141 16.7763C5.45639 16.6061 5.73032 16.4792 5.89327 16.3956C6.05474 16.3134 6.3013 16.1606 6.63292 15.9371L7.13037 15.6019L7.13469 15.5954L7.14118 15.5911L7.14769 15.5867L7.152 15.5802L7.15632 15.5738L7.16281 15.5694L7.16932 15.5651L7.17362 15.5586L7.19525 15.5521L7.21688 15.5478L7.2212 15.5262L7.22769 15.5045L7.2342 15.5002L7.23851 15.4937L7.06548 15.4829C6.95014 15.4757 6.83839 15.4685 6.73025 15.4613C6.62211 15.4541 6.4527 15.4216 6.22199 15.364C5.99131 15.3063 5.74259 15.2198 5.47583 15.1044C5.20909 14.9891 4.94956 14.8521 4.69722 14.6935C4.44491 14.5349 4.2625 14.4029 4.15003 14.2977C4.03902 14.1939 3.89483 14.0468 3.71748 13.8565C3.54158 13.6647 3.38873 13.4679 3.25896 13.266C3.1292 13.0642 3.0052 12.8313 2.88698 12.5675L2.70745 12.1738L2.69664 12.1414L2.68582 12.109L2.67933 12.0873L2.67501 12.0657L2.70745 12.07L2.73989 12.0765L2.9778 12.109C3.13642 12.1306 3.38514 12.1378 3.72396 12.1306C4.06281 12.1234 4.29711 12.109 4.42687 12.0873C4.55664 12.0657 4.63595 12.0513 4.66478 12.0441L4.70804 12.0333L4.76211 12.0224L4.81618 12.0116L4.8205 12.0051L4.82699 12.0008L4.8335 11.9965L4.8378 11.99L4.79455 11.9792L4.75129 11.9684L4.70804 11.9576L4.66478 11.9467L4.62152 11.9359C4.59269 11.9287 4.54224 11.9143 4.47013 11.8927C4.39804 11.871 4.20339 11.7917 3.88617 11.6548C3.56898 11.5178 3.31665 11.3844 3.1292 11.2546C2.94128 11.1245 2.76211 10.9822 2.59282 10.8286C2.42412 10.6729 2.23886 10.4724 2.03698 10.2273C1.83513 9.98221 1.6549 9.69744 1.49629 9.37302C1.33769 9.0486 1.21873 8.7386 1.13942 8.44302C1.06043 8.14917 1.00832 7.84874 0.983724 7.54546L0.944772 7.09127L0.9664 7.09559L0.988028 7.10208L1.00966 7.1129L1.03128 7.12371L1.05291 7.13452L1.07454 7.14534L1.40977 7.29673C1.63328 7.39767 1.91083 7.48418 2.24245 7.55627C2.57409 7.62836 2.77233 7.66802 2.83722 7.67522L2.93454 7.68604H3.1292L3.12489 7.67955L3.11838 7.67522L3.11189 7.6709L3.10757 7.66441L3.10326 7.65792L3.09675 7.6536L3.09027 7.64927L3.08594 7.64278L3.06431 7.63197L3.04268 7.62115L3.03838 7.61467L3.03187 7.61034L3.02538 7.60601L3.02106 7.59953L2.99943 7.58871L2.9778 7.5779L2.9735 7.57141C2.96917 7.56851 2.90716 7.52238 2.78747 7.43299C2.66923 7.34215 2.54524 7.22465 2.41547 7.08045C2.28571 6.93626 2.15594 6.78487 2.02617 6.62627C1.89616 6.46731 1.78037 6.29723 1.68012 6.11801C1.57921 5.93779 1.47249 5.70851 1.36003 5.43024C1.24901 5.1534 1.16466 4.8744 1.10698 4.59324C1.04932 4.31208 1.01688 4.03453 1.00966 3.76056C1.00245 3.4866 1.00966 3.25231 1.03128 3.05766C1.05291 2.863 1.09617 2.64311 1.16105 2.398C1.22594 2.15289 1.31967 1.89336 1.44222 1.6194L1.62605 1.20847L1.63687 1.17602L1.64768 1.14358L1.65419 1.13926L1.65849 1.13277L1.66282 1.12628L1.66931 1.12195L1.67582 1.12628L1.68012 1.13277L1.68445 1.13926L1.69094 1.14358L1.69745 1.14791L1.70175 1.1544L1.70608 1.16088L1.71256 1.16521L1.72338 1.18684L1.73419 1.20847L1.7407 1.21279L1.74501 1.21928L2.03698 1.5437C2.23164 1.75998 2.46234 2.0015 2.72908 2.26824C2.99584 2.53497 3.14362 2.67339 3.17245 2.68349C3.2013 2.69502 3.23734 2.72818 3.28059 2.78298C3.32385 2.83634 3.46804 2.96394 3.71315 3.1658C3.95828 3.36765 4.27909 3.60197 4.67559 3.8687C5.07212 4.13544 5.51188 4.39859 5.9949 4.65812C6.47794 4.91766 6.99701 5.15196 7.55211 5.36103C8.10724 5.57011 8.49654 5.70708 8.72002 5.77196C8.94353 5.83685 9.3256 5.91975 9.8663 6.02069C10.407 6.12162 10.8143 6.18651 11.0883 6.21534C11.3622 6.24417 11.5497 6.26076 11.6506 6.26508L11.802 6.26941L11.7977 6.23696L11.7912 6.20452L11.7479 5.93417C11.7191 5.75395 11.7047 5.50161 11.7047 5.1772C11.7047 4.85278 11.7299 4.5536 11.7804 4.27963C11.8309 4.00567 11.9066 3.72812 12.0075 3.44696C12.1084 3.1658 12.2072 2.94013 12.3038 2.77C12.4018 2.60131 12.5302 2.40882 12.6888 2.19254C12.8474 1.97626 13.0528 1.75278 13.3051 1.52207C13.5575 1.29137 13.8458 1.0859 14.1703 0.905674C14.4947 0.725449 14.7939 0.588457 15.0678 0.494743C15.3418 0.401029 15.5725 0.339736 15.7599 0.310906C15.9474 0.282076 16.0411 0.265487 16.0411 0.261162Z"></path>
              </svg>
            </a>
            {/* <a
              className="p-2 hover:text-gray-500"
              href="https://www.facebook.com/GitHub"
            >
              <span className="sr-only">Dan Stroot on Facebook</span>
              <svg
                role="img"
                aria-hidden="true"
                width="24"
                height="24"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 22.6754C24 23.4069 23.407 24 22.6755 24V23.9999L16.5597 23.9999L1.32475 23.9999C0.593045 23.9999 0.000183105 23.4069 0.000183105 22.6753V1.32457C0.000183105 0.592952 0.593045 0 1.32475 0H22.6755C23.4069 0 24 0.592862 24 1.32457V22.6754ZM16.5597 14.7059V23.9998H12.8192V14.7059H9.69159V11.0838H12.8192V8.41261C12.8192 5.3127 14.7124 3.62476 17.4778 3.62476C18.8023 3.62476 19.9409 3.7234 20.2726 3.76746V7.00702L18.3546 7.00792C16.8508 7.00792 16.5596 7.72254 16.5596 8.77122V11.0838H20.1464L19.6793 14.7059H16.5597Z"
                ></path>
              </svg>
            </a> */}
            {/* <a
              className="p-2 hover:text-gray-500"
              href="https://www.youtube.com/github"
            >
              <span className="sr-only">Dan Stroot on YouTube</span>
              <svg
                role="img"
                aria-hidden="true"
                width="24"
                height="18"
                className="fill-current"
              >
                <path d="M12.5317 17.2793L7.60784 17.1892C6.0136 17.1578 4.41539 17.2205 2.85241 16.8954C0.474754 16.4096 0.306312 14.028 0.130056 12.0303C-0.112807 9.22168 -0.0187875 6.36213 0.439526 3.57699C0.69826 2.01424 1.71648 1.08173 3.29112 0.98026C8.6067 0.611995 13.9576 0.655638 19.2614 0.827447C19.8216 0.843197 20.3856 0.929282 20.9379 1.02727C23.6643 1.50519 23.7308 4.20411 23.9076 6.47611C24.0838 8.77154 24.0094 11.0788 23.6725 13.3586C23.4022 15.2462 22.8851 16.8291 20.7028 16.9819C17.9686 17.1818 15.2971 17.3426 12.5552 17.2914C12.5553 17.2793 12.5395 17.2793 12.5317 17.2793ZM9.63694 12.5004C11.6974 11.3173 13.7186 10.154 15.7673 8.97882C13.703 7.79575 11.6857 6.63241 9.63694 5.45727V12.5004Z"></path>
              </svg>
            </a> */}
            {/* <a href="#" className="p-2 hover:text-gray-500">
              <span className="sr-only">Dan Stroot on Instagram</span>
              <svg
                role="img"
                aria-hidden="true"
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
              </svg>
            </a> */}
            <a
              className="p-2 hover:text-gray-500"
              href="https://www.linkedin.com/in/danstroot"
            >
              <span className="sr-only">Dan Stroot on LinkedIn</span>
              <svg
                role="img"
                aria-hidden="true"
                width="24"
                height="24"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.77375 0.0478516C0.794438 0.0478516 0 0.815021 0 1.76016V22.2401C0 23.1853 0.794531 23.9519 1.77375 23.9519H22.2262C23.2059 23.9519 24 23.1852 24 22.2398V1.76016C24 0.815021 23.2059 0.0478516 22.2262 0.0478516H1.77375ZM7.2933 9.29063V20.0523H3.70192V9.29063H7.2933ZM7.53001 5.96247C7.53001 6.9952 6.75048 7.82156 5.49836 7.82156L5.49808 7.82147H5.47483C4.26948 7.82147 3.49023 6.9951 3.49023 5.96237C3.49023 4.90621 4.29302 4.10291 5.52217 4.10291C6.75048 4.10291 7.50658 4.90621 7.53001 5.96247ZM12.8723 20.0523H9.28117L9.28108 20.0527C9.28108 20.0527 9.32823 10.3006 9.28136 9.29101H12.8725V10.8143C13.3499 10.0811 14.2043 9.03833 16.1093 9.03833C18.472 9.03833 20.2435 10.5765 20.2435 13.8819V20.0523H16.6525V14.2957C16.6525 12.8489 16.1325 11.8621 14.8333 11.8621C13.841 11.8621 13.2501 12.5276 12.9906 13.1705C12.8957 13.3999 12.8723 13.7219 12.8723 14.0431V20.0523Z"
                ></path>
              </svg>
            </a>
            <a
              className="p-2 hover:text-gray-500"
              href="https://github.com/dstroot"
            >
              <span className="sr-only">Dan Stroot on GitHub</span>
              <svg
                role="img"
                aria-hidden="true"
                width="24"
                height="24"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.75C5.64625 0.75 0.5 5.89625 0.5 12.25C0.5 17.3387 3.79187 21.6369 8.36312 23.1606C8.93812 23.2612 9.15375 22.9162 9.15375 22.6144C9.15375 22.3412 9.13938 21.4356 9.13938 20.4725C6.25 21.0044 5.5025 19.7681 5.2725 19.1212C5.14313 18.7906 4.5825 17.77 4.09375 17.4969C3.69125 17.2812 3.11625 16.7494 4.07938 16.735C4.985 16.7206 5.63188 17.5687 5.8475 17.9137C6.8825 19.6531 8.53563 19.1644 9.19688 18.8625C9.2975 18.115 9.59938 17.6119 9.93 17.3244C7.37125 17.0369 4.6975 16.045 4.6975 11.6462C4.6975 10.3956 5.14312 9.36062 5.87625 8.55562C5.76125 8.26812 5.35875 7.08937 5.99125 5.50812C5.99125 5.50812 6.95438 5.20625 9.15375 6.68687C10.0738 6.42812 11.0513 6.29875 12.0288 6.29875C13.0063 6.29875 13.9838 6.42812 14.9038 6.68687C17.1031 5.19187 18.0662 5.50812 18.0662 5.50812C18.6987 7.08937 18.2962 8.26812 18.1812 8.55562C18.9144 9.36062 19.36 10.3812 19.36 11.6462C19.36 16.0594 16.6719 17.0369 14.1131 17.3244C14.53 17.6837 14.8894 18.3737 14.8894 19.4519C14.8894 20.99 14.875 22.2262 14.875 22.6144C14.875 22.9162 15.0906 23.2756 15.6656 23.1606C20.2081 21.6369 23.5 17.3244 23.5 12.25C23.5 5.89625 18.3538 0.75 12 0.75Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
