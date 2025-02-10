poluygon css link : https://bennettfeely.com/clippy/

defalut color (dark-green) : #1AAD49 ;

<!-- font style section  -->
[
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-Merriweather",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ['400'],
  variable: "--font-nunito",
  subsets: ["latin"],
});

 className={`${nunito.className} ${merriweather.className}  `}
]
