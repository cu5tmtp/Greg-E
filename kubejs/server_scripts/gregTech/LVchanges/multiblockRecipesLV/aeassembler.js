ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:aeassembler', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'ae2:certus_quartz_crystal',
            C: 'gtceu:lv_conveyor_module',
            D: 'gtceu:lv_voltage_coil',
            E: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu
        .aeassembler('8lp')
        .itemInputs('8x ae2:printed_logic_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:logic_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .aeassembler('8ep')
        .itemInputs('8x ae2:printed_engineering_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:engineering_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .aeassembler('8cp')
        .itemInputs('8x ae2:printed_calculation_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:calculation_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)
        
    event.recipes.gtceu
        .aeassembler('8qp')
        .itemInputs('8x advanced_ae:printed_quantum_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x advanced_ae:quantum_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)  

    event.recipes.gtceu
        .aeassembler('8ap')
        .itemInputs('8x megacells:printed_accumulation_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x megacells:accumulation_processor')
        .circuit(8)
        .duration(800)
        .EUt(30)

    event.recipes.gtceu
        .aeassembler('3cc1k')
        .itemInputs('12x ae2:certus_quartz_crystal', '16x minecraft:redstone', '3x ae2:logic_processor')    
        .itemOutputs('3x ae2:cell_component_1k')
        .circuit(1)
        .duration(400)
        .EUt(30)

    event.recipes.gtceu
        .aeassembler('3cc4k')
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:redstone', '3x ae2:cell_component_1k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_4k')
        .circuit(4)
        .duration(400)
        .EUt(60)

    event.recipes.gtceu
        .aeassembler('3cc16k')
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:glowstone_dust', '3x ae2:cell_component_4k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_16k')
        .circuit(16)
        .duration(400)
        .EUt(300)

    event.recipes.gtceu
        .aeassembler('3cc64k')
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:glowstone_dust', '3x ae2:cell_component_16k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_64k')
        .circuit(16)
        .duration(400)
        .EUt(600)
    
    event.recipes.gtceu
        .aeassembler('3cc256k')
        .itemInputs('3x ae2:quartz_glass', '12x ae2:sky_dust', '3x ae2:cell_component_64k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_256k')
        .circuit(16)
        .duration(400)
        .EUt(2500)

    event.recipes.gtceu
        .aeassembler('3cc1m')
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:sky_dust', '3x ae2:cell_component_256k', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_1m')
        .circuit(16)
        .duration(400)
        .EUt(10000)

    event.recipes.gtceu
        .aeassembler('3cc4m')
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x #forge:dusts/ender_pearl', '3x megacells:cell_component_1m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_4m')
        .circuit(16)
        .duration(400)
        .EUt(10000)

    event.recipes.gtceu
        .aeassembler('3cc16m')
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x #forge:dusts/ender_pearl', '3x megacells:cell_component_4m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_16m')
        .circuit(16)
        .duration(400)
        .EUt(10000)

    event.recipes.gtceu
        .aeassembler('3cc64m')
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:matter_ball', '3x megacells:cell_component_16m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_64m')
        .circuit(16)
        .duration(400)
        .EUt(10000)
        
    event.recipes.gtceu
        .aeassembler('3cc256m')
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:matter_ball', '3x megacells:cell_component_64m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_256m')
        .circuit(16)
        .duration(400)
        .EUt(10000)  
});