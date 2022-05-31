import React, { useEffect } from 'react'
import { RightSection } from '../Hero/HeroStyles'
import { useThemeContext } from 'src/styles/theme'
const BackgroundAnimation = () => {
  const { theme } = useThemeContext()

  useEffect(() => {
    let lowerSVG = document.getElementById('path_0-')
    let lowerClone = lowerSVG.cloneNode(true)
    lowerSVG.parentNode.replaceChild(lowerClone, lowerSVG)
    let upperSVG = document.getElementById('path_1-')
    let upperClone = upperSVG.cloneNode(true)
    upperSVG.parentNode.replaceChild(upperClone, upperSVG)
  }, [theme])

  return (
    <RightSection hideSmall>
      <svg
        className="BgAnimation__svg"
        width="100%"
        height="300px"
        viewBox="0 0 857 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="1">
          <path
            className="path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 30.2141H258.758L329.645 183.547C332.765 190.316 339.406 194.943 346.878 195C354.35 195.056 361.179 190.798 364.4 184.076L420.475 67.0426L479.792 184.333C483.089 190.96 489.912 195.109 497.332 194.998C504.751 194.887 511.447 190.537 514.544 183.814L567.808 68.2003L586.657 111.8H558.71V150.2H603.373L618.121 183.547C620.747 187.364 629.2 195 642 195C654.8 195 855 195 901 195"
            stroke="url(#paint0_radial)"
            id="path_0-"
          />
          <path
            d="M0.5 3.00072C50.6824 3.00071 268.5 3.00069 268.5 3.00069C279.5 3.00072 289.291 4.53996 293.759 14.1862C321.394 74.1707 347.145 131 347.145 131L403.241 13.9243C406.416 7.29602 413.107 3.05524 420.475 3.00069C427.842 2.94614 434.595 7.08739 437.87 13.6679L497.332 133.174L550.308 14.1862C553.471 7.32094 560.378 2.94302 567.955 3.00072C575.532 3.05843 582.372 7.54104 585.429 14.4537L653.363 168.054H724.682H901"
            stroke="url(#paint1_radial)"
            id="path_1-"
          />
        </g>

        <defs>
          <radialGradient
            id="paint0_radial"
            cx=".4"
            cy="0"
            r="1.6"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor={theme ? 'black' : 'white'} />
            <stop
              offset="1"
              stopColor={theme ? 'black' : 'white'}
              stopOpacity="0"
            />
          </radialGradient>
          <radialGradient
            id="paint1_radial"
            cx="-.1"
            cy="-.3"
            r="1.2"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor={theme ? 'black' : 'white'} />
            <stop
              offset="1"
              stopColor={theme ? 'black' : 'white'}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
      </svg>
    </RightSection>
  )
}

export default BackgroundAnimation
