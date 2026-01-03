ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:voidminer', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'gtceu:ruby_lens',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .voidminer('voidustdrillfor')
        .inputFluids('kubejs:deepdrill 1000')
        .notConsumable('gtceu:glass_lens')
        .itemOutputs('kubejs:voiddust')
        .duration(100)
        .EUt(480)

    event.recipes.gtceu
        .voidminer('voidtentacle')
        .inputFluids('kubejs:deepdrill 1000')
        .notConsumable('gtceu:black_glass_lens')
        .itemOutputs('kubejs:voidtent')
        .duration(100)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu
        .voidminer('oildrillforfueladastra')
        .inputFluids('kubejs:deepdrill 1000')
        .notConsumable('gtceu:black_glass_lens')
        .outputFluids('ad_astra:oil 500')
        .duration(100)
        .EUt(480)
        .circuit(2)
});