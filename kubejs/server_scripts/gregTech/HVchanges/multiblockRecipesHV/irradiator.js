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

    event.recipes.gtceu.irradiator('irradiatorthatdamnpu')
        .itemInputs(
            'gtceu:plutonium_dust'
        )   
        .inputFluids(
            'gtceu:helium 144'
        )
        .itemOutputs(
            '2x gtceu:curiuum_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.irradiator('irradiatorthatdamnegg')
        .itemInputs(
            'kubejs:voidegg'
        )   
        .itemOutputs('kubejs:voideggopen')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
});
