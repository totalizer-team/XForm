const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Add a new product',
    secondary: 'Orders placed across your store',
  },
  left: {
    c: 'ObjectBlock',
    xs: 8,
    schema: {
      information: {
        c: 'ObjectBlock',
        xs: 12,
        label: 'Product Information',
        variant: 'elevation',
        elevation: 3,
        schema: {
          name: {
            c: 'TextField',
            xs: 12,
            label: 'Product Name',
          },
          sku: {
            c: 'TextField',
            xs: 6,
            label: 'SKU',
          },
          barcode: {
            c: 'TextField',
            xs: 6,
            label: 'Barcode',
          },
          description: {
            c: 'TextField',
            xs: 12,
            label: 'Description',
            multiline: true,
            minRows: 5,
            maxRows: 10,
          },
        },
      },
      variants: {
        c: 'ArrayList',
        xs: 12,
        label: 'Product Variants',
        addText: 'Add Another Option',
        variant: 'elevation',
        elevation: 3,
        schema: {
          variant: {
            c: 'Select',
            xs: 5,
            label: 'Variant',
            options: [
              {
                value: 'size',
                label: 'Size',
              },
              {
                value: 'color',
                label: 'Color',
              },
              {
                value: 'weight',
                label: 'Weight',
              },
              {
                value: 'smell',
                label: 'Smell',
              },
            ],
          },
          value: {
            c: 'TextField',
            xs: 7,
            label: 'Value',
          },
        },
      },
    },
  },
  right: {
    c: 'ObjectBlock',
    xs: 4,
    schema: {
      pricing: {
        c: 'ObjectBlock',
        xs: 12,
        label: 'Pricing',
        variant: 'elevation',
        elevation: 3,
        schema: {
          basePrice: {
            c: 'TextField',
            xs: 6,
            label: 'Base Price',
            startAdornment: '$',
          },
          discountedPrice: {
            c: 'TextField',
            xs: 6,
            label: 'Discounted Price',
            startAdornment: '$',
          },
          inStock: {
            c: 'Switch',
            xs: 12,
            switchLabel: 'In stock',
          },
        },
      },
      config: {
        c: 'ObjectBlock',
        xs: 12,
        label: 'Config',
        variant: 'elevation',
        elevation: 3,
        schema: {
          shipping: {
            c: 'Radio',
            xs: 12,
            label: 'Shipping Type',
            default: 'seller',
            options: [
              {
                value: 'seller',
                label: 'Fulfilled by Seller',
                secondary:
                  "You'll be responsible for product delivery. Any damage or delay during shipping may cost you a Damage fee",
              },
              {
                value: 'company',
                label: 'Fulfilled by Company name',
                secondary:
                  'Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.',
              },
            ],
          },
          attributes: {
            c: 'Checkbox',
            xs: 12,
            label: 'Attributes',
            options: [
              {
                value: 'fragile',
                label: 'Fragile Product',
                secondary: '易碎品',
              },
              {
                value: 'biodegradable',
                label: 'Biodegradable',
                secondary: '可生物降解',
              },
              {
                value: 'frozen',
                label: 'Frozen Product',
                secondary: '冷冻产品',
              },
            ],
          },
        },
      },
    },
  },
};
export default schema;
