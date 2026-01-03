ServerEvents.recipes((event) => {

    //Add single processors, though this is not the intended way going forward - use Giant Squeezer
    event.recipes.gtceu.assembler('ae2pl')
        .itemInputs(
            'minecraft:gold_ingot',
        )
        .itemOutputs(
            'ae2:printed_logic_processor'
        )
        .notConsumable('ae2:logic_processor_press')
        .duration(300)
        .EUt(30)
        .circuit(1)

    event.recipes.gtceu.assembler('ae2pe')
        .itemInputs(
            'minecraft:diamond',
        )
        .itemOutputs(
            'ae2:printed_engineering_processor'
        )
        .notConsumable('ae2:engineering_processor_press')
        .duration(300)
        .EUt(30)
        .circuit(1)

    event.recipes.gtceu.assembler('ae2pc')
        .itemInputs(
            'ae2:certus_quartz_crystal',
        )
        .itemOutputs(
            'ae2:printed_calculation_processor'
        )
        .notConsumable('ae2:calculation_processor_press')
        .duration(300)
        .EUt(30)
        .circuit(1)

    event.recipes.gtceu.assembler('ae2ps')
        .itemInputs(
            'ae2:silicon',
        )
        .itemOutputs(
            'ae2:printed_silicon'
        )
        .notConsumable('ae2:silicon_press')
        .duration(300)
        .EUt(30)
        .circuit(1)

    event.recipes.gtceu.assembler('kss')
        .itemInputs(
            '2x gtceu:lv_electric_piston',
            'gtceu:lv_machine_hull',
            '2x gtceu:tin_single_cable',
            '#gtceu:circuits/lv',
            'minecraft:anvil',
            'minecraft:bucket'
        )
        .itemOutputs(
            'kubejs:slurry_squeezer'
        )
        .duration(1000)
        .EUt(30)
        .circuit(1)
});