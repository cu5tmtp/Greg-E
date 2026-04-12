ServerEvents.recipes((event) => {

    // Add gregified recipies for solar panel tiers
    // Solar panel 1
    event.shaped(
        Item.of('solarflux:sp_1', 1),
        [
            'AAA',
            'BBB',
            'CDC'
        ],
        {
            A: 'solarflux:mirror',
            B: 'gtceu:copper_single_wire',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:redstone'
        }
    )

    //Solar panel 2
    event.shaped(
        Item.of('solarflux:sp_2', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'solarflux:sp_1',
            B: '#gtceu:circuits/lv'
        }
    )

    //Solar panel 3
    event.recipes.gtceu.assembler('sp_three')
        .itemInputs(
            '8x solarflux:sp_2',
            '8x solarflux:photovoltaic_cell_1'
        )
        .inputFluids(
            'gtceu:tin 144'
        )
        .itemOutputs(
            '3x solarflux:sp_3'
        )
        .duration(500)
        .EUt(60)
        .circuit(1)

    //Solar panel 4    
    event.recipes.gtceu.assembler('sp_four')
        .itemInputs(
            '8x solarflux:sp_3',
            '8x solarflux:photovoltaic_cell_2'
        )
        .inputFluids(
            'gtceu:tin 144'
        )
        .itemOutputs(
            '3x solarflux:sp_4'
        )
        .duration(500)
        .EUt(240)
        .circuit(1)
    
    //Solar panel 5
    event.recipes.gtceu.assembler('sp_five')
        .itemInputs(
            '8x solarflux:sp_4',
            '8x solarflux:photovoltaic_cell_3'
        )
        .inputFluids(
            'gtceu:tin 144'
        )
        .itemOutputs(
            '3x solarflux:sp_5'
        )
        .duration(500)
        .EUt(1020)
        .circuit(1)
    
    //Solar panel 6    
    event.recipes.gtceu.assembler('sp_six')
        .itemInputs(
            '8x solarflux:sp_5',
            '8x solarflux:photovoltaic_cell_4'
        )
        .inputFluids(
            'gtceu:tin 144'
        )
        .itemOutputs(
            '3x solarflux:sp_6'
        )
        .duration(500)
        .EUt(4080) 
        .circuit(1)

    //Solar panel 7    
    event.recipes.gtceu.assembler('sp_seven')
        .itemInputs(
            '8x solarflux:sp_6',
            '8x solarflux:photovoltaic_cell_5'
        )
        .inputFluids(
            'gtceu:tin 144'
        )
        .itemOutputs(
            '3x solarflux:sp_7'
        )
        .duration(500)
        .EUt(12080) 
        .circuit(1)

    //no more recipies for this, get the Dyson swarm multiblocks!
});