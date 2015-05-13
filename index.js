
/**
 * Device constructor shorthand
 *
 * defaults to a @1x (relative points) canvas
 *
 * @class
 * @param {Object} options
 */

module.exports = class Device extends DeviceComponent {
  constructor(opts={}) {
    opts.contentScale = opts.contentScale || 2

    super(opts)

    this.setupContext()

    // Make the content view (and thus the `Screen` object)
    // the correct dimensions (@1x)
    this.content.width = Screen.width / this.contentScale
    this.content.height = Screen.height / this.contentScale

    Framer.Device = this
  }
}
