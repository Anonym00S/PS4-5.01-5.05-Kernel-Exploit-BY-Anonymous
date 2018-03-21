/* For storing the gadget and import map */

window.gadgetMap = [];

window.basicImportMap = [];



/* All function stubs / imports from other modules */

var generateBasicImportMap = function()

{

  window.basicImportMap =

  {

    '5.01':

    {

      'setjmp':            getGadget('libSceWebKit1', 0x866),     // setjmp imported from libkernel

      '__stack_chk_fail': getGadget('libSceWebKit1', 0x9728DF8),

    }

  };

}



/* All gadgets from the binary of available modules */

var generateGadgetMap = function()

{

  window.gadgetMap =

  {

    '5.01':

    {

      'pop rsi':  getGadget('libSceWebKit1', 0xA459E),

      'pop rdi':  getGadget('libSceWebKit1', 0x10F1C1),

      'pop rax':  getGadget('libSceWebKit1', 0x1D70B),

      'pop rcx':  getGadget('libSceWebKit1', 0x1FCA9B),

      'pop rdx':  getGadget('libSceWebKit1', 0xD6660),

      'pop r8':   getGadget('libSceWebKit1', 0x4A3B0D),

      'pop r9':   getGadget('libSceWebKit1', 0xEB5F8F),

      'pop rsp':  getGadget('libSceWebKit1', 0x20AEB0),



      'push rax': getGadget('libSceWebKit1', 0x126EFC),



      'add rax, rcx': getGadget('libSceWebKit1', 0x86F06),



      'mov rax, rdi':             getGadget('libSceWebKit1', 0x9863),

      'mov qword ptr [rdi], rax': getGadget('libSceWebKit1', 0x31ADD7),

      'mov qword ptr [rdi], rsi': getGadget('libSceWebKit1', 0x43CF30),



      'mov rax, qword ptr [rax]': getGadget('libSceWebKit1', 0xFD58D),



      'jmp addr': getGadget('libSceWebKit1', 0x64F754),



      'infloop': getGadget('libSceWebKit1', 0x45A61),

      'jmp rax': getGadget('libSceWebKit1', 0x1CA2B9),

      'push rax; jmp rcx': getGadget('libSceWebKit1', 0x469B80),



      'ret': getGadget('libSceWebKit1', 0xB2),

      'syscall': getGadget('libSceWebKit1', 0x1C69364),

    }

  };

}
