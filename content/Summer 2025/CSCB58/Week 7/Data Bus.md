> Many can read from it, but only 1 (the bus driver) can write into it
> Deals with the issue of only wanting to get 1 input from several cells connected to one master "lane". Multiplexers work but these are more elegant!

How do they work? Tri-state buffers! It's literally just a switch. Input goes in and out, but `WE` determines if there's a physical bridge or not between `A` and `Y`
![[Tri-state buffer.png|300]]
- Z = open circuit = high impedance = *neither `0` or `1`*!

