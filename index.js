        var bash_exit_code = 0;          // global to provide exit code from bash shell invocation

        function bash(command)
        {
          var c;           // a character of the shell's stdout stream
          var retval = "";          // the return value is the stdout of the shell

          var rt = Runtime.getRuntime();        // get current runTime object
          var shell = rt.exec("bash -c '" + command + "'");   // start the shell
          var shellIn = shell.getInputStream();        // this captures the output from the command

          while ((c = shellIn.read()) != -1)        // loop to capture shell's stdout
            {
              retval += String.fromCharCode(c);        // one character at a time
            }

          bash_exit_code = shell.waitFor();        // wait for the shell to finish and get the return code

          shellIn.close();          // close the shell's output stream

          return retval;
        }