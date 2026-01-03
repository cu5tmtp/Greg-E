ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:dragonalloykiln', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'kubejs:drahead',
            C: 'minecraft:blast_furnace',
            D: 'minecraft:obsidian',
            E: 'gtceu:ev_machine_hull'
        }
    )

    event.recipes.gtceu
        .dragonalloykiln('sloweralloying')
        .itemInputs(
            'kubejs:cursedin'
        )
        .inputFluids(
            'kubejs:holywater 1000',
            'minecraft:lava 1000'
        )
        .itemOutputs(
            'kubejs:mixedin'
        )
        .duration(1000)
        .circuit(1)

    event.recipes.gtceu
        .dragonalloykiln('alloyfaster')
        .itemInputs(
            'kubejs:cursedin'
        )
        .inputFluids(
            'kubejs:holywater 1000',
            'minecraft:lava 30000'
        )
        .itemOutputs(
            'kubejs:mixedin'
        )
        .duration(200)
        .circuit(2)

    event.recipes.gtceu
        .dragonalloykiln('alloyfasterer')
        .itemInputs(
            'kubejs:cursedin'
        )
        .inputFluids(
            'kubejs:holywater 1000',
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:mixedin'
        )
        .duration(5)
        .circuit(3)

    event.recipes.gtceu
        .dragonalloykiln('orchalcumalloyingslow')
        .itemInputs(
            '8x minecraft:redstone',
            '2x gtceu:nichrome_ingot',
            '4x gtceu:steel_ingot'
        )
        .inputFluids(
            'minecraft:lava 1000'
        )
        .itemOutputs(
            'kubejs:orichalcum'
        )
        .duration(500)
        .circuit(1)

    event.recipes.gtceu
        .dragonalloykiln('orchalcumalloyingfast')
        .itemInputs(
            '8x minecraft:redstone',
            '2x gtceu:nichrome_ingot',
            '4x gtceu:steel_ingot',
        )
        .inputFluids(
            'minecraft:lava 5000'
        )
        .itemOutputs(
            'kubejs:orichalcum'
        )
        .duration(200)
        .circuit(2)

    event.recipes.gtceu
        .dragonalloykiln('orchalcumalloyingfaster')
        .itemInputs(
            '8x minecraft:redstone',
            '2x gtceu:nichrome_ingot',
            '4x gtceu:steel_ingot',
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:orichalcum'
        )
        .duration(5)
        .circuit(3)


    event.recipes.gtceu
        .dragonalloykiln('mythrilwithallslow')
        .itemInputs(
            'gregecore:mythril_ingot'
        )
        .inputFluids(
            'minecraft:lava 3000'
        )
        .outputFluids(
            'gregecore:molten_mythril 144'
        )
        .duration(1000)
        .notConsumable('kubejs:orichalcumpli')
        .notConsumable('kubejs:fhammer')
        .circuit(1)

    event.recipes.gtceu
        .dragonalloykiln('mythrilwithallfast')
        .itemInputs(
            'gregecore:mythril_ingot'
        )
        .inputFluids(
            'minecraft:lava 30000'
        )
        .outputFluids(
            'gregecore:molten_mythril 144'
        )
        .duration(200)
        .notConsumable('kubejs:orichalcumpli')
        .notConsumable('kubejs:fhammer')
        .circuit(2)

    event.recipes.gtceu
        .dragonalloykiln('mythrilwithallfaster')
        .itemInputs(
            'gregecore:mythril_ingot'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .outputFluids(
            'gregecore:molten_mythril 144'
        )
        .duration(5)
        .notConsumable('kubejs:orichalcumpli')
        .notConsumable('kubejs:fhammer')
        .circuit(3)
})