/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react";
import { dummyHomeSlideData } from "../../data/dummyHomeSlideData"
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react';
import { TopNewsNoticeData } from "../../data/TopNewsNoticeData";


export const SlidingImage: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalDuration = 5000;
    const [currentNews, setCurrentNews] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(nextTopNews, intervalDuration);
        return () => clearInterval(intervalId);
    }, [currentNews])

    const nextTopNews = () => {
        const isLastNews = currentNews === TopNewsNoticeData.length - 1;
        const newIndex = isLastNews ? 0 : currentNews + 1;
        setCurrentNews(newIndex);
    }

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? dummyHomeSlideData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === dummyHomeSlideData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, intervalDuration);
        return () => clearInterval(intervalId)
    }, [currentIndex])

    return (
        <div className="max-w-[1400px] has-[580px] w-full m-auto py-4 px-4  relative group">
            <div style={{ backgroundImage: `url(${dummyHomeSlideData[currentIndex].image})`, height: '580px' }} className="w-full h-full bg-center bg-cover rounded-2xl duration-500 "></div>
            <div className="hidden group-hover:block absolute top-[45%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-custom-blue/60 text-white cursor-pointer">
                <ArrowLeft size={30} onClick={prevSlide} />
            </div>
            <div className="hidden group-hover:block absolute top-[45%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-custom-blue/60 text-white cursor-pointer">
                <ArrowRight size={30} onClick={nextSlide} />
            </div>
            <div className="absolute bottom-20 left-[25%] text-center bg-white/80 rounded-xl w-6/12 py-4">
                <p className="text-custom-blue text-xl font-bold">{`${dummyHomeSlideData[currentIndex].description}`}</p>
            </div>
            <div className="absolute bottom-[25%] right-20 w-80 bg-customYellow/50 p-4 rounded-xl items-center">
                <h5 className="text-custom-blue font-bold text-center">{t('topNewsAndNotice')}</h5>
                <h6 className="text-white underline font-bold text-center">{`${TopNewsNoticeData[currentNews].title}`} </h6>
                <p className="text-white text-center">{`${TopNewsNoticeData[currentNews].description}`}</p>
                <div className="flex justify-center items-center">
                    {TopNewsNoticeData.map((_news, newsIndex) => (
                        <div key={newsIndex} className={`transition-transform duration-300 ${currentNews === newsIndex ? 'text-custom-blue' : 'text-white'}`}>
                            <Dot className="size-8" />
                        </div>
                    ))

                    }

                </div>
            </div>
            <div className="absolute bottom-[25%] left-32 w-1/3 space-y-5 bg-custom-blue/50 rounded-xl p-2">
                <h1 className="font-bold text-7xl text-white text-center">Cathedral </h1>
                <h1 className="font-bold text-7xl text-white text-center"> Saint </h1>
                <h1 className="font-bold text-7xl text-white text-center"> Michel</h1>
            </div>
            <div className="flex absolute bottom-0  items-center w-full text-custom-blue  justify-center py-2">
                {dummyHomeSlideData.map((_slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer transition-transform duration-300 ${currentIndex === slideIndex ? 'text-custom-blue' : 'text-gray-200'}`}
                    >
                        <Dot className="size-24" />
                    </div>))}

            </div>
        </div>
    )
}