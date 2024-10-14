package backend.academy.demo.model;

import backend.academy.demo.model.ValidationException;

public record Params(byte x, float y, float r) {


    // Canonical constructor
    public Params(byte x, float y, float r) {
        // You can add validation here if needed
        this.x = x;
        this.y = y;
        this.r = r;
        validate();
    }

    public static Params create(byte x, float y, float r) {
        var params= new Params(x, y, r);
        params.validate();
        return params;
    }

    // Non-canonical constructor
    public Params(String xStr, String yStr, String rStr) {
        this(
            Byte.parseByte(xStr),
            Float.parseFloat(yStr),
            Float.parseFloat(rStr)
        );
    }

    private void validate() {
        if (r <=0) {
            throw new ValidationException("R must be positive.");
        }
    }
}