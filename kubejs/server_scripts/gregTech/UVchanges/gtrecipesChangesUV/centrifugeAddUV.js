ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getcollagen')
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '32x gtceu:collagen_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(1)

    event.recipes.gtceu.centrifuge('getmeatdust')
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '32x gtceu:meat_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(2)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .chancedOutput('gtceu:raw_aurelium', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(3)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '2x gtceu:vadricium_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(4)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '2x gtceu:raw_zenithium'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(5)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '5x gtceu:niobium_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(6)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:dustwithbroom'
        )
        .itemOutputs(
            '8x enchanted:mandrake_root'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
        .circuit(7)


    

})