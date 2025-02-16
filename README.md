poluygon css link : https://bennettfeely.com/clippy/

defalut color (nion) : #D6FB00 ;

<!-- font style section  -->
[
  import { } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const nunito = Nunito({
 weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

 className={`${nunito.className} ${rubik.className}  `}
]
