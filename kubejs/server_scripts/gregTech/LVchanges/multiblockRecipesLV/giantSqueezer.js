ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:giant_squeezer', 1),
        [
            'BAB',
            'DCD',
            'EFE'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'gtceu:lv_electric_piston',
            C: 'minecraft:iron_block',
            D: 'gtceu:lv_electric_pump',
            E: 'gtceu:lv_conveyor_module',
            F: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu
        .giant_squeezer('lvalloysingle') 
        .itemInputs('minecraft:iron_ingot')
        .inputFluids('kubejs:lvcas 250')    
        .itemOutputs('kubejs:lvalloy')
        .circuit(1)
        .duration(150)
        .EUt(62)

    event.recipes.gtceu
        .giant_squeezer('lvalloyquadruple') 
        .itemInputs('4x minecraft:iron_ingot')
        .inputFluids('kubejs:lvcas 1000')    
        .itemOutputs('4x kubejs:lvalloy')
        .circuit(4)
        .duration(400)
        .EUt(62)

    event.recipes.gtceu
        .giant_squeezer('ae2plsingle') 
        .itemInputs('minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('ae2:printed_logic_processor')
        .circuit(1)
        .duration(150)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2ploctuple') 
        .itemInputs('8x minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .inputFluids('minecraft:water 500')    
        .itemOutputs('8x ae2:printed_logic_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2epsingle') 
        .itemInputs('minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('ae2:printed_engineering_processor')
        .circuit(1)
        .duration(150)
        .EUt(30)
    
    event.recipes.gtceu
        .giant_squeezer('ae2epoctuple') 
        .itemInputs('8x minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .inputFluids('minecraft:water 500')    
        .itemOutputs('8x ae2:printed_engineering_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2cpsigle') 
        .itemInputs('ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('ae2:printed_calculation_processor')
        .circuit(1)
        .duration(150)
        .EUt(30)
    
    event.recipes.gtceu
        .giant_squeezer('ae2cpoctuple') 
        .itemInputs('8x ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .inputFluids('minecraft:water 500')    
        .itemOutputs('8x ae2:printed_calculation_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2pssignle') 
        .itemInputs('ae2:silicon')
        .notConsumable('ae2:silicon_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('ae2:printed_silicon')
        .circuit(1)
        .duration(150)
        .EUt(30)
    
    event.recipes.gtceu
        .giant_squeezer('ae2psoctuple') 
        .itemInputs('8x ae2:silicon')
        .notConsumable('ae2:silicon_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('8x ae2:printed_silicon')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2pqpsingle') 
        .itemInputs('advanced_ae:quantum_alloy')
        .notConsumable('advanced_ae:quantum_processor_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('advanced_ae:printed_quantum_processor')
        .circuit(1)
        .duration(150)
        .EUt(30)
    
    event.recipes.gtceu
        .giant_squeezer('ae2pqpoctuple') 
        .itemInputs('8x advanced_ae:quantum_alloy')
        .notConsumable('advanced_ae:quantum_processor_press')
        .inputFluids('minecraft:water 500')    
        .itemOutputs('8x advanced_ae:printed_quantum_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2papsingle') 
        .itemInputs('megacells:sky_steel_ingot')
        .notConsumable('advanced_ae:quantum_processor_press')
        .inputFluids('minecraft:water 100')    
        .itemOutputs('megacells:printed_accumulation_processor')
        .circuit(1)
        .duration(150)
        .EUt(30)

    event.recipes.gtceu
        .giant_squeezer('ae2papoctuple') 
        .itemInputs('8x megacells:sky_steel_ingot')
        .notConsumable('advanced_ae:quantum_processor_press')
        .inputFluids('minecraft:water 500')    
        .itemOutputs('8x megacells:printed_accumulation_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)
    
    
});