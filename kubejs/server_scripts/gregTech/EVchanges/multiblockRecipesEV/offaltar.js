ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:offaltar', 1),
        [
            ' A ',
            'DBD',
            'CEF'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'kubejs:dewvial',
            C: 'botania:runic_altar',
            D: 'botania:rune_air',
            E: 'gtceu:ev_machine_hull',
            F: 'minecraft:lantern'
        }
    )

    event.recipes.gtceu
        .offaltar('getholywater')
        .inputFluids(
            'minecraft:water 1000'
        )
        .outputFluids(
            'kubejs:holywater 1000'
        )
        .notConsumable('relics:holy_locket')
        .duration(200) 
        .circuit(1)

    event.recipes.gtceu
        .offaltar('getholywaterfast')
        .inputFluids(
            'minecraft:water 7777', 'kubejs:acidinfusedlava 1000'
        )
        .outputFluids(
            'kubejs:holywater 7777'
        )
        .notConsumable('relics:holy_locket')
        .duration(5)
        .circuit(2) 
        
        
    event.recipes.gtceu
        .offaltar('getmythril')
        .itemInputs(
            '2x kubejs:mixedin'
        )
        .inputFluids(
            'kubejs:holywater 1000'
        )
        .itemOutputs(
            'gregecore:mythril_ingot'
        )
        .duration(200) 
        .circuit(1)

    event.recipes.gtceu
        .offaltar('getmythrilfast')
        .itemInputs(
            '2x kubejs:mixedin'
        )
        .inputFluids(
            'kubejs:holywater 1000', 'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'gregecore:mythril_ingot'
        )
        .duration(5) 
        .circuit(2)

    event.recipes.gtceu
        .offaltar('getlootboxforpttery')
        .itemInputs('4x minecraft:diamond')
        .itemOutputs(
            'kubejs:dwre'
        )
        .duration(200)

})