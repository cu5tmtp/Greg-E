ServerEvents.recipes((event) =>{

    event.recipes.gtceu.extractor('getmoltenf')
        .itemInputs(
            'gregecore:franklinite_ingot'
        )
        .outputFluids(
            'gregecore:molten_franklinite 144'
        )
        .duration(100)
        .EUt(1680)

    event.recipes.gtceu.extractor('getmoltenorichalcum')
        .itemInputs(
            'kubejs:orichalcum'
        )
        .outputFluids(
            'kubejs:moltenorichalcum 144'
        )
        .duration(100)
        .EUt(1680)

    event.recipes.gtceu.canner('getmythrilcoating')
        .itemInputs(
            'gtceu:empty_spray_can'
        )
        .inputFluids(
            'gregecore:molten_mythril 288'
        )
        .itemOutputs(
            'kubejs:mythrilcoating'
        )
        .duration(100)
        .EUt(1680)

    event.recipes.gtceu.assembler('yesfinallyevalloy')
        .itemInputs(
            '2x kubejs:hvalloy',
            'kubejs:mythrilcoating'
        )
        .itemOutputs(
            'kubejs:evalloy'
        )
        .inputFluids(
            'kubejs:evcas 10'
        )
        .duration(100)
        .EUt(1680)

    event.recipes.gtceu.extractor('getevcef')
        .itemInputs(
            '#gtceu:circuits/ev'
        )
        .outputFluids(
            'kubejs:evcas 1000'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.EV])



})