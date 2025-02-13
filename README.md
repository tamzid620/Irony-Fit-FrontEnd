poluygon css link : https://bennettfeely.com/clippy/

defalut color (nion) : #D6FB00 ;

<!-- font style section  -->
[
  import { } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-Merriweather",
  subsets: ["latin"],
});

const nunito = Nunito({
 weight: ["300", "400", "700", "900"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

 className={`${nunito.className} ${merriweather.className}  `}
]
