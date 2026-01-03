ServerEvents.recipes((event) => {

    //Add presses recipes
    event.recipes.gtceu.laser_engraver('ae2sp')
        .itemInputs(
            'kubejs:rawsiliconpress',
        )
        .itemOutputs(
            'ae2:silicon_press'
        )
        .duration(3500)
        .EUt(30)
        .circuit(16)

    event.recipes.gtceu.laser_engraver('ae2ep')
        .itemInputs(
            'kubejs:rawengineeringpress',
        )
        .itemOutputs(
            'ae2:engineering_processor_press'
        )
        .duration(3500)
        .EUt(30)
        .circuit(16)

    event.recipes.gtceu.laser_engraver('ae2lp')
        .itemInputs(
            'kubejs:rawlogicpress',
        )
        .itemOutputs(
            'ae2:logic_processor_press'
        )
        .duration(3500)
        .EUt(30)
        .circuit(16)

    event.recipes.gtceu.laser_engraver('ae2cp')
        .itemInputs(
            'kubejs:rawcalculationpress',
        )
        .itemOutputs(
            'ae2:calculation_processor_press'
        )
        .duration(3500)
        .EUt(30)
        .circuit(16)

});