import React from 'react'
import Svg, {G, Path} from 'react-native-svg'
import { PropsIcon } from './interface'

const MapIcon = ({
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
                    <Path 
                        d="M2430 5114 c-14 -2 -56 -9 -95 -15 -164 -26 -364 -109 -513 -212
                        -434 -299 -655 -866 -518 -1324 28 -93 86 -243 116 -302 12 -24 20 -45 18 -47
                        -2 -2 -247 78 -544 177 -400 133 -547 178 -569 174 -16 -3 -41 -17 -55 -30
                        l-25 -25 0 -1481 0 -1481 27 -23 c18 -15 271 -105 770 -271 409 -137 754 -250
                        768 -252 14 -1 355 107 757 242 l733 244 732 -244 c403 -134 743 -244 755
                        -244 13 0 37 13 55 29 l33 29 3 1466 c2 1608 6 1508 -56 1539 -15 8 -254 90
                        -532 182 -278 92 -508 171 -513 174 -4 4 2 34 13 67 53 153 64 214 63 359 0
                        92 -6 167 -17 220 -112 522 -491 909 -1006 1026 -81 19 -340 34 -400 23z m391
                        -227 c133 -35 231 -78 341 -150 217 -143 381 -364 453 -612 30 -105 49 -263
                        40 -347 -21 -219 -164 -538 -459 -1023 -103 -169 -627 -965 -636 -965 -8 1
                        -495 736 -601 909 -329 534 -474 852 -496 1083 -12 132 30 343 97 493 102 228
                        316 442 545 546 76 34 215 75 300 89 104 16 308 4 416 -23z m-1799 -1749 l547
                        -183 76 -129 75 -129 0 -1230 c0 -979 -3 -1228 -12 -1225 -7 3 -295 99 -640
                        214 l-628 209 0 1333 c0 1265 1 1333 18 1328 9 -3 263 -88 564 -188z m3178
                        -76 l475 -159 3 -1332 c2 -1065 0 -1332 -10 -1329 -7 3 -295 99 -640 214
                        l-628 209 0 1016 0 1016 75 129 c42 71 107 191 146 267 56 110 74 137 87 133
                        9 -3 231 -77 492 -164z m-1990 -1120 c311 -467 312 -468 384 -438 29 12 77 78
                        316 438 155 232 284 425 286 427 2 2 4 -380 4 -850 l0 -854 -627 -209 c-346
                        -115 -634 -211 -640 -214 -10 -3 -13 214 -13 1064 0 587 2 1065 4 1063 2 -2
                        131 -195 286 -427z"/>
                    <Path 
                        d="M2455 4539 c-360 -56 -624 -382 -602 -744 11 -179 79 -327 212 -460
                        219 -221 546 -269 828 -123 99 51 222 169 280 268 174 300 106 674 -165 906
                        -62 53 -188 118 -271 138 -77 20 -208 27 -282 15z m206 -203 c175 -37 322
                        -166 379 -332 114 -328 -132 -674 -480 -674 -348 0 -594 346 -480 674 56 163
                        205 294 374 331 80 18 127 18 207 1z"/>
                </G>
        </Svg>

    )
}

export default MapIcon