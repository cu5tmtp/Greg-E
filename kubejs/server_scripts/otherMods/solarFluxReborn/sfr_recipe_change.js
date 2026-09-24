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

    event.shaped(
        Item.of('solarflux:photovoltaic_cell_2', 1),
        [
            'AAA',
            'ABA',
            'CDC'
        ],
        {
            A: 'gtceu:pyrostellit_foil',
            B: 'minecraft:glass_pane',
            C: 'solarflux:mirror',
            D: 'solarflux:photovoltaic_cell_1'
        }
    )

    event.shaped(
        Item.of('solarflux:photovoltaic_cell_3', 1),
        [
            'AAA',
            'ABA',
            'CDC'
        ],
        {
            A: 'gtceu:pyrostellit_plate',
            B: 'minecraft:glass_pane',
            C: 'minecraft:obsidian',
            D: 'solarflux:photovoltaic_cell_2'
        }
    )

    event.shaped(
        Item.of('solarflux:photovoltaic_cell_4', 1),
        [
            'AAA',
            'ABA',
            'CDC'
        ],
        {
            A: 'gtceu:aethelosil_foil',
            B: 'minecraft:glass_pane',
            C: 'minecraft:obsidian',
            D: 'solarflux:photovoltaic_cell_3'
        }
    )

    event.shaped(
        Item.of('solarflux:photovoltaic_cell_5', 1),
        [
            'AAA',
            'ABA',
            'CDC'
        ],
        {
            A: 'gtceu:aethelosil_plate',
            B: 'minecraft:glass_pane',
            C: 'minecraft:obsidian',
            D: 'solarflux:photovoltaic_cell_4'
        }
    )

    event.recipes.gtceu.mixer()
        .itemInputs(
            '3x minecraft:blaze_powder',
            'gregecore:plutonium_hexafluoride_dust',
            'gtceu:uranium_dust',
            '2x gtceu:chromium_dust'
        )
        .inputFluids(
            'gtceu:chlorine 150'
        )
        .itemOutputs(
            '6x gtceu:pyrostellit_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(250)
        .circuit(4)

    event.recipes.gtceu.forming_press()
        .itemInputs(
            '3x gtceu:pyrostellit_dust'
        )
        .itemOutputs(
            '2x gtceu:pyrostellit_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(350)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:pyrostellit_dust'
        )
        .itemOutputs(
            'gtceu:pyrostellit_ingot'
        )
        .notConsumable('gtceu:ingot_extruder_mold')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(150)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:pyrostellit_ingot'
        )
        .itemOutputs(
            '2x gtceu:pyrostellit_plate'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:pyrostellit_ingot'
        )
        .itemOutputs(
            '8x gtceu:pyrostellit_foil'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)
        .circuit(10)

    event.recipes.gtceu.mixer()
        .itemInputs(
            '3x gtceu:magnesium_dust',
            'gtceu:molybdenum_dust',
            'gtceu:pyrostellit_dust',
            '2x gtceu:chromium_dust',
            '2x minecraft:glowstone_dust'
        )
        .inputFluids(
            'gtceu:nitric_acid 100'
        )
        .itemOutputs(
            '7x gtceu:aethelosil_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(250)
        .circuit(5)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:aethelosil_dust'
        )
        .inputFluids(
            'gtceu:chloroform 100'
        )
        .itemOutputs(
            'gtceu:hot_aethelosil_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(500)
        .blastFurnaceTemp(3500)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_aethelosil_ingot'
        )
        .itemOutputs(
            'gtceu:aethelosil_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:aethelosil_ingot'
        )
        .itemOutputs(
            '2x gtceu:aethelosil_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:aethelosil_ingot'
        )
        .itemOutputs(
            '8x gtceu:aethelosil_foil'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)
        .circuit(10)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:tin_dust',
            '4x gtceu:copper_dust',
            'gtceu:gold_dust'
        )
        .itemOutputs(
            '6x gtceu:solar_bronze_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(250)
        .circuit(4)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:solar_bronze_dust'
        )
        .itemOutputs(
            'gtceu:solar_bronze_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(400)
        .blastFurnaceTemp(1300)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:solar_bronze_ingot'
        )
        .itemOutputs(
            '2x gtceu:solar_bronze_plate'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:solar_bronze_ingot'
        )
        .itemOutputs(
            '8x gtceu:solar_bronze_foil'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(10)

    event.shaped(
        Item.of('solarflux:blank_upgrade', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'gtceu:solar_bronze_foil',
            B: 'solarflux:mirror'
        }
    )

    event.shaped(
        Item.of('solarflux:efficiency_upgrade', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_plate',
            B: '#gtceu:circuits/mv',
            C: 'solarflux:blank_upgrade'
        }
    )

    event.shaped(
        Item.of('solarflux:efficiency_upgrade', 4),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_plate',
            B: '#gtceu:circuits/hv',
            C: 'solarflux:blank_upgrade'
        }
    )

    event.shaped(
        Item.of('solarflux:efficiency_upgrade', 8),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_plate',
            B: '#gtceu:circuits/ev',
            C: 'solarflux:blank_upgrade'
        }
    )

    event.shaped(
        Item.of('solarflux:efficiency_upgrade', 16),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_plate',
            B: '#gtceu:circuits/iv',
            C: 'solarflux:blank_upgrade'
        }
    )

    event.shaped(
        Item.of('solarflux:transfer_rate_upgrade', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_foil',
            B: 'solarflux:photovoltaic_cell_1',
            C: 'solarflux:blank_upgrade'
        }
    )

    event.shaped(
        Item.of('solarflux:capacity_upgrade', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:solar_bronze_foil',
            B: 'solarflux:photovoltaic_cell_1',
            C: 'solarflux:mirror'
        }
    )

});