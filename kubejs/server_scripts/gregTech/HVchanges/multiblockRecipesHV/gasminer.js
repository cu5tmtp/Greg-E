ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:gasminer', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'gtceu:emerald_lens',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:steel_frame',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu.gasminer('gasnatural')
        .inputFluids('kubejs:deepdrill 500')
        .outputFluids(
            'gtceu:natural_gas 500',
            'gtceu:helium 50'
        )
        .duration(800)
        .circuit(1)
        .EUt(480)

    event.remove( {id:"gtceu:distillery/getheliuminhv"})
    event.recipes.gtceu.distillery('getheliummmmminhv')
        .inputFluids(
            'gtceu:ender_air 1000'
        )
        .outputFluids(
            'gtceu:helium 500'
        )
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])
        

});