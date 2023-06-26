import React from 'react'
import Svg, {G, Path} from 'react-native-svg'
import { PropsIcon } from './interface'

const CargoIcon = ({
    width = '42',
    height = '42',
    color = '#000000'
}: PropsIcon) => {
    return (
        <Svg 
            width={width}
            height={height}
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <G 
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none">
            <Path d="M377 4360 c-178 -31 -337 -194 -367 -376 -6 -36 -10 -533 -10 -1249
                0 -1328 -5 -1233 69 -1282 33 -22 40 -23 296 -23 l262 0 7 -77 c23 -279 188
                -488 451 -574 104 -34 259 -32 371 4 155 51 289 164 362 304 50 98 64 146 71
                253 l6 85 845 0 845 0 7 -90 c19 -262 191 -477 448 -557 96 -29 253 -31 345
                -4 207 62 379 232 439 436 9 30 19 92 23 137 l6 83 82 0 c69 0 88 4 116 23 71
                47 70 29 67 632 l-3 540 -285 455 c-157 250 -299 471 -317 490 l-31 35 -545 3
                -545 2 -5 173 c-5 188 -13 225 -73 327 -60 103 -165 188 -289 236 -48 18 -92
                19 -1325 20 -701 1 -1297 -2 -1323 -6z m2557 -302 c54 -16 128 -90 144 -144 9
                -31 12 -226 12 -773 l0 -731 -1395 0 -1395 0 0 763 0 764 23 43 c16 30 37 51
                67 67 l43 23 1230 0 c940 0 1239 -3 1271 -12z m856 -1167 c0 -418 0 -418 23
                -452 46 -70 39 -69 550 -69 l457 0 0 -320 0 -320 -38 0 c-33 0 -42 6 -77 50
                -79 99 -209 182 -340 215 -84 21 -215 19 -310 -5 -114 -29 -196 -79 -292 -176
                l-82 -84 -146 0 -145 0 0 790 0 790 200 0 200 0 0 -419z m726 125 c99 -158
                189 -301 198 -317 l17 -29 -320 0 -321 0 0 320 0 321 122 -3 123 -3 181 -289z
                m-1426 -1096 l0 -190 -645 0 -645 0 -87 88 c-136 136 -267 192 -448 192 -192
                0 -359 -78 -481 -222 l-48 -58 -218 0 -218 0 0 190 0 190 1395 0 1395 0 0
                -190z m-1685 -240 c71 -34 139 -108 165 -177 30 -80 25 -196 -12 -268 -68
                -130 -213 -202 -352 -175 -77 15 -122 38 -173 90 -167 167 -109 453 111 540
                73 28 192 24 261 -10z m2931 9 c100 -38 172 -120 200 -230 67 -262 -206 -488
                -454 -374 -188 85 -252 322 -131 489 35 50 101 100 156 121 59 21 163 19 229
                -6z"/>
            </G>
        </Svg>
    )
}

export default CargoIcon