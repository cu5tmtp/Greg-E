ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:delirium_dust',
            '3x gtceu:atarax_dust',
            '2x gtceu:grympl3_dust'
        )
        .itemOutputs(
            '2x gtceu:arboretum_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'kubejs:fading'
        )
        .itemOutputs(
            '2x gtceu:atomicmesh_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'kubejs:fading'
        )
        .itemOutputs(
            '2x gtceu:bindingdust_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(2)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'kubejs:fading'
        )
        .itemOutputs(
            '3x gtceu:carcosa_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(3)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'kubejs:fading'
        )
        .itemOutputs(
            '4x gtceu:raw_xynred'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .circuit(4)

})