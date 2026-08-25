ServerEvents.recipes((event) => {

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            '16x kubejs:euclid/euclid_circuit'
        )
        .itemOutputs(
            'kubejs:mirrorofkalandra'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone")
        .circuit(1)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            'kubejs:mirrorofkalandra',
            '4x kubejs:euclid/euclid_circuit'
        )
        .itemOutputs(
            'kubejs:unstabledrillhead'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone")
        .circuit(1)

    event.recipes.gtceu.gccrafting('cvhdwjscvcgxfdysdjvj')
        .itemInputs(
            '4x gtceu:solid_machine_casing',
            '8x gtceu:laminated_glass',
            '16x kubejs:euclid/euclid_circuit',
            '16x kubejs:euclid/euclid_integrated'
        )
        .itemOutputs(
            'gregecore:pfarray'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(350)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo")
        .circuit(2)

    event.recipes.gtceu.gccrafting('cvhdwjscvsdjvj')
        .itemInputs(
            '2x kubejs:euclid/euclid_circuit',
            '2x kubejs:euclid/euclid_integrated',
            'gtceu:uiv_electric_motor',
            '2x kubejs:ultimatediode',
            '4x kubejs:ultimateresistor'
        )
        .itemOutputs(
            Item.of('kubejs:euclid/euclid_computer')
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo")
        .circuit(2)

})