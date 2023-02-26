import Image from "next/image"
import { useEffect, useState } from "react"
import { BannerContainer, GradientDiv, Title } from "./index.styles"

export default function Banner() {
  const [imagePosition, setImagePosition] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(0)

  const isMobile = windowWidth < 738
  const arrayImages = [
    `party1${isMobile ? "mob" : ""}.jpg`,
    `party2${isMobile ? "mob" : ""}.jpg`,
    `party3${isMobile ? "mob" : ""}.jpg`,
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (arrayImages.length - 1 === imagePosition) {
        setImagePosition(0)
      } else {
        setImagePosition(imagePosition + 1)
      }
    }, 6000)

    return () => clearInterval(intervalId)
  }, [imagePosition, arrayImages.length])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <BannerContainer
      backgroundImage={`/images/banner/${arrayImages[imagePosition]}`}
    >
      <GradientDiv>
        <Title>Lidia Festas e Decorações</Title>
        <section>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GradientDiv>
    </BannerContainer>
  )
}
