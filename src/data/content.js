import img from "../images/images"

const queenCopy = "These artfully designed rooms range from 230-280 square feet and are furnished with a queen or king size bed. All rooms have a modern work environment with desk and work lighting and all the amenities for the perfect stay."
const kingCopy = "At 300-350 square feet, this artfully designed room guarantees a king size bed. Relax or read in the velvet club chair or plug in your laptop at the convenient work desk. The perfect size for those who need a little more space."
const doubleCopy = "Appointed with 2 Queen Size beds and approximately 410 square feet, this well designed room offers all the luxury amenities and comforts for up to 4 people."
const bunkCopy = "This room features two custom designed XL Twin Bunk Beds with upholstered headboards, built-in reading lights, outlets and night tables. An in-room sofa and dining table offers the ultimate solution for up to four family members, friends or co-workers."
const loftCopy = "At 390 square feet this custom designed room has an open floor plan that includes both your living room and workspace, with a king size bed and sofa created for a comfortable luxurious stay. Make a splash and enjoy a relaxing soak in the cast iron claw foot tub, of course painted in your chosen color of emotion."
const suiteCopy ="This 1 Bedroom King Suite at 510-610 square feet has a separate living and dining areas that feature an eclectic combination of custom designed and iconic furnishings. Add to this the convenience of a fully equipped kitchenette along with a comfy queen size living room sofa bed and your suite is ready to be your home away from home."
const grandSuiteCopy = "Enjoy this artful and lavishly spacious 870 square foot one-bedroom, 1 ½ bath, Grand Suite with separate living and dining areas that feature an eclectic combination of custom designed and iconic furnishings. This magnificent living space has a fully equipped kitchenette with moveable kitchen island – as well as dining table with seating for six. Perfect for long term stays."

const bluePageCopy = "Delight in a Zen selection of blues that create an atmosphere of tranquility. The desktop Zen Garden aids your emotional state of being free from agitation of mind, body or spirit. The perfect room for work and relaxation."
const greenPageCopy = "Nurture in a medley of greens that create the aura of rejuvenation. The Himalayan Salt Lamp accent has health benefits that can boost blood flow, improve sleep and increase levels of serotonin in the brain, all while enhancing your emotions to a state of being revitalized. The perfect room for work and renewal."
const yellowPageCopy = "Revel in an array of yellows that create the spirit of happiness. Smiley Face whoopee cushions delight and emphasize fun along with a state of well-being and contentment. The perfect room for work and play."
const redPageCopy = "Bask in palette of reds that create an ambience of passion. The exotic scent of a Kamasutra Massage Oil Candle provides an escape which inspires our guests to discover their passions with intense desire or enthusiasm. The perfect room for work and romance."

const queenRoomName = "Queen Room"
const kingRoomName = "King Room"
const doubleRoomName = "Double Queen Room"
const bunkRoomName = "Double Bunk Beds"
const loftRoomName = "Loft King Room With Tub"
const suiteRoomName = "1 Bedroom King Suite"
const grandSuiteRoomName = " 1 Bedroom Grand King Suite"
const twoBedroomGrandSuiteRoomName = "2 Bedroom Grand King Suite"

const queenPrice = "$160.00"
const kingPrice = "$135.00"
const doubleRoomPrice = "$216.00"
const bunkPrice = "$212.00"
const loftPrice = "$237.00"
const suitePrice = "$250.00"
const grandSuitePrice = "$743.00"
const twoBedroomSuitePrice = "$1210.00"

const title = {
    red: "Passion Red",
    yellow: "Happiness Yellow",
    green: "Rejuvenation Green",
    blue: "Tranquility Blue"
}

const copy = {
    red: redPageCopy,
    blue: bluePageCopy,
    green: greenPageCopy,
    yellow: yellowPageCopy
}

const queen = {
    name: queenRoomName,
    copy: queenCopy,
    price: queenPrice,
    red: img.red.queen,
    blue: img.blue.queen,
    green: img.green.queen,
    yellow: img.yellow.queen
}

const king = {
    name: kingRoomName,
    copy: kingCopy,
    price: kingPrice,
    red: img.red.king,
    blue: img.blue.king,
    green: img.green.king,
    yellow: img.yellow.king
}

const double = {
    name: doubleRoomName,
    copy: doubleCopy,
    price: doubleRoomPrice,
    red: img.red.double,
    blue: img.blue.double,
    green: img.green.double,
    yellow: img.yellow.double
}

const bunk = {
    name: bunkRoomName,
    copy: bunkCopy,
    price: bunkPrice,
    red: img.red.bunk,
    green: img.green.bunk,
    yellow: img.yellow.bunk
}

const loft = {
    name: loftRoomName,
    copy: loftCopy,
    price: loftPrice,
    red: img.red.loft,
    blue: img.blue.loft,
    green: img.green.loft,
    yellow: img.yellow.loft
}

const suite = {
    name: suiteRoomName,
    copy: suiteCopy,
    price: suitePrice,
    red: img.red.suite,
    blue: img.blue.suite,
    green: img.green.suite,
    yellow: img.yellow.suite
}

const grandSuite = {
    name: grandSuiteRoomName,
    copy: grandSuiteCopy,
    price: grandSuitePrice,
    red: img.red.grandSuite,
    blue: img.blue.grandSuite,
}

const passionRed= [queen, king, double, bunk, loft, suite]
const happinessYellow = [queen, king, double, bunk, loft, suite]
const tranquilityBlue = [queen, king, double,loft, suite, grandSuite]
const rejuvenationGreen = [queen, king, double, bunk, loft, suite ]

// const rooms = [queen, king, double, bunk, loft, suite, grandSuite]

const rooms = {red: passionRed, yellow: happinessYellow, blue: tranquilityBlue, green: rejuvenationGreen}





export {queen, king, double, bunk, loft, suite, grandSuite, title, rooms, copy}

