import { register } from 'swiper/element/bundle';
import "./MainPage.css"

register();
const slidesData = [
    {
        id: 1,
        image: "./MainPage/slide1.webp"
    },
    {
        id: 2,
        image: "./MainPage/slide2.webp"
    },
    {
        id: 3,
        image: "./MainPage/slide3.webp"
    },
    {
        id: 4,
        image: "./MainPage/slide4.webp"
    },
]

function MainPage() {
    return (
        <section className="MainPage">
            <span>Main page in development 🛠️</span>
        </section>
    )
}

export default MainPage