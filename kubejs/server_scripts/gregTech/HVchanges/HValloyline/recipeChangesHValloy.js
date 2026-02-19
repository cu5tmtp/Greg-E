ServerEvents.recipes((event) =>{

    event.recipes.gtceu.compressor('getvoidgoo')
        .itemInputs(
            'kubejs:voidtent'
        )
        .itemOutputs(
            'kubejs:voidgoo'
        )
        .duration(200)
        .EUt(480)

    event.recipes.gtceu.macerator('getvoidparts')
        .itemInputs(
            'kubejs:voidorga'
        )
        .itemOutputs(
            '4x kubejs:voidorgparts'
        )
        .duration(200)
        .EUt(480)

    event.recipes.gtceu.extractor('gethvcef')
        .itemInputs(
            '#gtceu:circuits/hv'
        )
        .outputFluids(
            'kubejs:hvcas 1000'
        )
        .duration(500)
        .EUt(480)

    event.recipes.gtceu.assembler('dohvalloyccrffvf')
        .itemInputs(
            '2x kubejs:voidorgparts',
            'kubejs:mvalloy'
        )
        .inputFluids(
            'kubejs:hvcas 10'
        )
        .itemOutputs(
            'kubejs:hvalloy'
        )
        .duration(500)
        .EUt(480)
});