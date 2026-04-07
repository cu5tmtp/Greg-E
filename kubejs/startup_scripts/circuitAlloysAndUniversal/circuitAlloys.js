StartupEvents.registry('item', event => {

    //Add new items - circuit alloys
    event.create('lvalloy').displayName('LV Circuit Alloy Ingot')
    event.create('mvalloy').displayName('MV Circuit Alloy Ingot')
    event.create('hvalloy').displayName('HV Circuit Alloy Ingot')
    event.create('evalloy').displayName('EV Circuit Alloy Ingot')
    event.create('ivalloy').displayName('IV Circuit Alloy Ingot')
    event.create('luvalloy').displayName('LuV Circuit Alloy Ingot')
    event.create('animated/zpmalloy').displayName('ZPM Circuit Alloy Ingot')
    event.create('animated/uvalloy').displayName('UV Circuit Alloy Ingot')
    event.create('animated/uhvalloy').displayName('UHV Circuit Alloy Ingot')

})