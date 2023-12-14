package Itogovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itogovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: План
 */
@Entity(name = "IISItogovayaПлан")
@Table(schema = "public", name = "План")
public class Plan {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "ЭтоУслуга")
    private Boolean этоуслуга;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanZakupok")
    @Convert("PlanZakupok")
    @Column(name = "ПланЗакупок", length = 16, unique = true, nullable = false)
    private UUID _planzakupokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanZakupok", insertable = false, updatable = false)
    private PlanZakupok planzakupok;


    public Plan() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Boolean getЭтоУслуга() {
      return этоуслуга;
    }

    public void setЭтоУслуга(Boolean этоуслуга) {
      this.этоуслуга = этоуслуга;
    }


}