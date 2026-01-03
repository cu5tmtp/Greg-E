ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:irradiator', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'gtceu:uranium_ingot',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .irradiator('irradiatorthatdamnpu')
        .itemInputs(
            'kubejs:pu',
            'kubejs:he'
        )   
        .itemOutputs('kubejs:cm')
        .duration(200)
        .EUt(480)

    event.recipes.gtceu
        .irradiator('irradiatorthatdamnegg')
        .itemInputs(
            'kubejs:voidegg'
        )   
        .itemOutputs('kubejs:voideggopen')
        .duration(200)
        .EUt(480)   
});
