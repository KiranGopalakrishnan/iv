package code.kiran.iv;


public interface SpeechActivator
{
    /**
     * listen for speech activation, when heard, call a  SpeechActivationListener
     * and stop listening
     */
    public void detectActivation();

    /**
     * stop waiting for activation.
     */
    public void stop();
}