ServerEvents.recipes((event) => {

        event.shaped(
        Item.of('gtceu:atmosphericsampler', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'gtceu:aluminium_frame',
            C: 'gtceu:secure_maceration_casing',
            D: 'gtceu:sturdy_machine_casing',
            E: 'gtceu:zpm_machine_hull'
        }
    )

    event.recipes.gtceu.smdforge()
        .itemInputs(
            'gtceu:fine_tritanium_wire',
            'gtceu:niobium_coated_foil'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 80'
        )
        .itemOutputs(
            '8x kubejs:ultimatecapacitor'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)    

    event.recipes.gtceu.smdforge()
        .itemInputs(
            'gtceu:fine_aurelium_wire',
            'gtceu:zenithium_foil'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 80'
        )
        .itemOutputs(
            '8x kubejs:ultimatediode'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)    

    event.recipes.gtceu.smdforge()
        .itemInputs(
            'gtceu:fine_decursium_wire',
            'gtceu:panamium_foil'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 80'
        )
        .itemOutputs(
            '8x kubejs:ultimateinductor'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(500)   

    event.recipes.gtceu.smdforge()
        .itemInputs(
            'gtceu:fine_basiliskium_wire',
            'gregecore:draconium_cable_plate'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 80'
        )
        .itemOutputs(
            '8x kubejs:ultimatetransistor'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(500)   

    event.recipes.gtceu.smdforge()
        .itemInputs(
            'gtceu:fine_blaze_cubeish_wire',
            'gregecore:awakened_draconium_cable_foil'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 80'
        )
        .itemOutputs(
            '8x kubejs:ultimateresistor'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(500)  

});