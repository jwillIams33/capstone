
import redKing from "./red/red_king.jpg"
import redLoft from "./red/red_loft.jpg"
import redQueen from "./red/red_queen.jpg"
import redSuite from "./red/red_suite.jpg"
import redDouble from "./red/red-4.jpg"
import redBunk from "./red/red-5.jpg"
import redGrandSuite from "./red/1-bedroom-Grand-King-Suite.jpg"

import greenDouble from "./green/green_double.jpg"
import greenKing from "./green/green-8.jpg"
import greenSuite from "./green/green_suite.jpg"
import greenBunk from "./green/green-6.jpg"
import greenLoft from "./green/green-loft.jpg"
import greenQueen from "./green/green_queen.jpg"

import yellowQueen from "./yellow/yellow-queen-2.jpg"
import yellowKing from "./yellow/yellow-king.jpg"
import yellowDouble from "./yellow/yellow-double-2.jpg"
import yellowBunk from "./yellow/yellow-bunk.jpg"
import yellowLoft from "./yellow/yellow-loft.jpg"
import yellowSuite from "./yellow/yellow_suite.jpg"

import blueDouble from "./blue/blue_double.jpg"
import blueQueen from "./blue/blue-1.jpg"
import blueSuite from "./blue/blue_suite.jpg"
import blueLoft from "./blue/blue-loft.jpg"
import blueking from "./blue/blue-1.jpg"
import blueGrandSuite from "./blue/1-bedroom-Grand-King-Suite-Blue.jpg"

import passionRed from "./artwork/passion_red.png"
import happinessYellow from "./artwork/happiness_yellow.jpg"
import rejuvenationGreen from "./artwork/rejuvention_green.jpg"
import tranquilityBlue from "./artwork/tranquility_blue.png"

// const m = new Map()

// m.set('Red_King', redKing)



const img = {
  red: {
    queen: redQueen,
    king: redKing,
    double: redDouble,
    bunk: redBunk,
    loft: redLoft,
    suite: redSuite,
    grandSuite: redGrandSuite,
    art: passionRed
  },
  blue: {
    queen: blueQueen,
    king: blueking,
    double: blueDouble,
    loft: blueLoft,
    suite: blueSuite,
    grandSuite: blueGrandSuite,
    art: tranquilityBlue
  },
  yellow: {
    queen: yellowQueen,
    king: yellowKing,
    double: yellowDouble,
    bunk: yellowBunk,
    loft: yellowLoft,
    suite: yellowSuite,
    art: happinessYellow
  },
  green: {
    queen: greenQueen,
    king: greenKing,
    double: greenDouble,
    loft: greenLoft,
    suite: greenSuite,
    bunk: greenBunk,
    art: rejuvenationGreen
  }
}

export default img
