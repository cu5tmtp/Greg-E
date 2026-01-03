ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:mechanical_sap_tap', 1),
        [
            'BAB',
            'DCD',
            'EFE'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'gtceu:lv_electric_motor',
            C: 'minecraft:oak_log',
            D: 'gtceu:lv_robot_arm',
            E: 'gtceu:lv_conveyor_module',
            F: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu
        .mechanical_sap_tap('free_glue') 
        .notConsumable('#forge:tools/knives')     
        .outputFluids('gtceu:glue 100')
        .circuit(1)
        .duration(300)
        .EUt(25)

        event.recipes.gtceu
        .mechanical_sap_tap('free_rubber') 
        .notConsumable('#forge:tools/knives')     
        .outputFluids('gtceu:rubber 100')
        .circuit(2)
        .duration(300)
        .EUt(25)
    
});