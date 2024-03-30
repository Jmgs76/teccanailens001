PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        basic.showIcon(IconNames.No)
    } else {
        if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.green)) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
        }
    }
})
