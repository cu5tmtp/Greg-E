ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('getlichmodel')
        .itemInputs(
            '16x twilightforest:canopy_log',
            '4x twilightforest:firefly',
            '2x twilightforest:cicada',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/lich"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getknightmodel')
        .itemInputs(
            '16x twilightforest:underbrick',
            '4x twilightforest:steeleaf_ingot',
            '2x twilightforest:armor_shard',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/knight_phantom"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('geturghastmodel')
        .itemInputs(
            '16x twilightforest:towerwood',
            '4x twilightforest:carminite',
            '2x twilightforest:experiment_115',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/ur_ghast"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getminoshroommodel')
        .itemInputs(
            '16x twilightforest:mazestone',
            '4x twilightforest:ironwood_ingot',
            '2x twilightforest:maze_wafer',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/minoshroom"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('gethydramodel')
        .itemInputs(
            '16x twilightforest:twilight_oak_log',
            '4x twilightforest:torchberries',
            '2x twilightforest:smoker',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/hydra"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getyetimodel')
        .itemInputs(
            '16x minecraft:snow_block',
            '4x minecraft:packed_ice',
            '2x minecraft:blue_ice',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/alpha_yeti"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getqueenmodel')
        .itemInputs(
            '16x minecraft:packed_ice',
            '4x twilightforest:aurora_block',
            '2x twilightforest:aurora_pillar',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/snow_queen"}}')
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getlunarianmodel')
        .itemInputs(
            '16x ad_astra:moon_sand',
            '4x ad_astra:moon_cobblestone',
            '2x ad_astra:cheese',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:ad_astra/corrupted_lunarian"}}')
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getblazemodel')
        .itemInputs(
            '16x minecraft:netherrack',
            '4x minecraft:nether_bricks',
            '2x minecraft:warped_fungus',
            '#gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:blaze"}}')
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)


    event.recipes.gtceu.circuit_assembler('getwitherskelmodel')
        .itemInputs(
            '16x minecraft:netherrack',
            '4x minecraft:nether_bricks',
            '2x minecraft:blaze_rod',
            '#gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither_skeleton"}}')
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getwithermodel')
        .itemInputs(
            '16x minecraft:wither_skeleton_skull',
            '4x botanicalextramachinery:crimson_dragonstone_block',
            '2x minecraft:blaze_rod',
            '#gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}')
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getshulkermodel')
        .itemInputs(
            '16x minecraft:end_stone',
            '4x minecraft:purpur_block',
            '2x minecraft:popped_chorus_fruit',
            '#gtceu:circuits/hv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:shulker"}}')
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getrotbeastmodel')
        .itemInputs(
            '16x undergarden:cloggrum_ingot',
            '4x undergarden:sediment',
            '2x undergarden:coarse_deepsoil',
            '#gtceu:circuits/iv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:undergarden/rotbeast"}}')
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)

    event.recipes.gtceu.circuit_assembler('getforgottenmodel')
        .itemInputs(
            '16x undergarden:coarse_deepsoil',
            '4x undergarden:depthrock_bricks',
            '2x undergarden:regalium_crystal',
            '#gtceu:circuits/iv'
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:undergarden/forgotten_guardian"}}')
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)

    const terrasteel16 = Array(16).fill({ item: 'botania:terrasteel_ingot' });    
    event.recipes.botania.runic_altar(
        Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:botania/gaia_spirit"}}'),
        terrasteel16,
        75000        
    )


    event.custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
            item: 'avaritia:record_fragment'
      },
      ingredients: [
        {
          item: 'avaritia:eternal_singularity'
        },
        {
          item: 'avaritia:eternal_singularity'
        },
        {
          item: 'avaritia:eternal_singularity'
        },
        {
          item: 'avaritia:eternal_singularity'
        },
        {
          item: 'avaritia:eternal_singularity'
        },
        {
          item: 'avaritia:eternal_singularity'
        }
      ],
      result: {
        item: 'hostilenetworks:data_model',
        nbt: '{data_model:{id:"hostilenetworks:draconicevolution/draconic_guardian"}}'
      },
      tier: 'WYVERN',
      total_energy: 1280000,
    })
    .id('chaosgurdin');


})