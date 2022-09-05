//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Ecommerce_2.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Contract
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Contract()
        {
            this.BranchAddresses = new HashSet<BranchAddress>();
        }
    
        public int contractId { get; set; }
        public int partnerId { get; set; }
        public string taxId { get; set; }
        public string representPerson { get; set; }
        public string registerBranches { get; set; }
        public Nullable<int> sraffId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BranchAddress> BranchAddresses { get; set; }
        public virtual Partner Partner { get; set; }
        public virtual Staff Staff { get; set; }
    }
}