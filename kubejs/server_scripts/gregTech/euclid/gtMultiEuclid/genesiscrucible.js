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

    event.recipes.gtceu.gccrafting('cvhdwjscvshvghvhdjvj')
        .itemInputs(
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated',
            'gtceu:uiv_electric_motor',
            'kubejs:bioresistor'
        )
        .itemOutputs(
            Item.of('kubejs:euclid/euclid_computer')
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo")
        .circuit(2)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            'gtceu:uiv_machine_hull',
            'kubejs:euclidcoil',
            '8x kubejs:carcosacpuchip',
            '2x kubejs:euclid/euclid_computer',
            '4x gtceu:stabilizedarboretum_single_wire'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 1000'
        )
        .itemOutputs(
            'gtceu:uiv_energy_input_hatch'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo,genesiscruciblecasethree")
        .circuit(3)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            '2x kubejs:carcosacpuchip',
            '2x kubejs:carcosaramchip',
            '2x kubejs:euclid/euclid_computer',
            '4x gtceu:stabilizedarboretum_single_wire'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_mainframe'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo,genesiscruciblecasethree")
        .circuit(3)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            'kubejs:carcosacpuchip',
            'kubejs:carcosaramchip',
            'kubejs:euclid/euclid_computer',
            '2x gtceu:stabilizedarboretum_single_wire',
            '2x kubejs:biocapacitor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_mainframe'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(400)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo,genesiscruciblecasethree")
        .circuit(3)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            '8x gtceu:nonconducting_casing',
            '4x kubejs:euclid/euclid_mainframe',
            '4x gtceu:uiv_sensor',
            '2x gtceu:uiv_emitter',
            '8x gtceu:fracturedfossilmaterial_single_wire'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 1000'
        )
        .itemOutputs(
            'gregecore:quantumsynergizer'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo,genesiscruciblecasethree,genesiscruciblecasefour")
        .circuit(4)

    event.recipes.gtceu.gccrafting()
        .itemInputs(
            '16x kubejs:euclid/nullingot',
            '16x kubejs:euclid/elementium',
            '16x kubejs:euclid/euclid_mainframe',
            '16x #gtceu:circuits/uhv',
            '16x #grege:circuits/avaritia'
        )
        .inputFluids(
            'gtceu:fracturedlubricant 10000'
        )
        .itemOutputs(
            'kubejs:quarterone'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("insertedc", "genesiscruciblecaseone,genesiscruciblecasetwo,genesiscruciblecasethree,genesiscruciblecasefour")
        .circuit(4)

})