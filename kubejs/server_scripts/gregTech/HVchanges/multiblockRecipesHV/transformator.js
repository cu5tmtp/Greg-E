ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:transformator', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'minecraft:cauldron',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    /*
    event.recipes.gtceu
        .transformator('heliumapoule')
        .inputFluids('gtceu:helium 100')   
        .itemOutputs('kubejs:he')
        .duration(100)
        .EUt(480)

    event.recipes.gtceu
        .transformator('nobapoule')
        .itemInputs('4x kubejs:no')   
        .itemOutputs('gregecore:nobelium_dust')
        .duration(100)
        .EUt(480)

    event.recipes.gtceu
        .transformator('cbapoule')
        .itemInputs('4x minecraft:coal')   
        .itemOutputs('kubejs:c')
        .duration(100)
        .EUt(480)
    
    event.recipes.gtceu
        .transformator('howtogetpuf')
        .itemInputs('kubejs:voiddust')   
        .itemOutputs('2x gregecore:plutonium_hexafluoride_dust')
        .duration(100)
        .EUt(480)
    */

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:he'
        )
        .outputFluids(
            'gtceu:helium 100'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:cm'
        )
        .itemOutputs(
            'gtceu:curiuum_dust'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:pu'
        )
        .itemOutputs(
            'gtceu:plutonium_dust'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:li'
        )
        .itemOutputs(
            'gtceu:lithiumsix_dust'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:li'
        )
        .itemOutputs(
            'gtceu:lithiumsix_dust'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.transformator()
        .itemInputs(
            'kubejs:c'
        )
        .itemOutputs(
            'gtceu:carbon_dust'
        )
        .duration(1)
        .EUt(GTValues.VA[GTValues.LV])

    
});